"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { MoreHorizontal } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Message } from "@/model/user";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const handleDelete = async (id: string) => {
  const res = await axios.delete(`/api/delete-message/${id}`);
  console.log(res);
  if (!res.data.ok) throw new Error(res.data.message);

  return res.data;
};

function DeleteAction({ id }: { id: string }) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: handleDelete,
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["messages"] });

      const previous = queryClient.getQueryData<Message[]>(["messages"]);

      queryClient.setQueryData<Message[]>(["messages"], (old) =>
        old?.filter((msg) => msg._id !== id)
      );

      return { previous };
    },
    onError: (err: any, id, context: any) => {
      if (context?.previous) {
        queryClient.setQueryData(["messages"], context.previous);
      }
      toast.error(err.message ?? "Failed to delete");
    },
    onSuccess: (data) => {
      toast.success(data?.message ?? "Deleted");
    },
  });

  return (
    <DropdownMenuItem
      onClick={() => deleteMutation.mutate(id)}
      className="text-destructive"
    >
      Delete Message
    </DropdownMenuItem>
  );
}

export const columns: ColumnDef<Message>[] = [
  {
    id: "actions",
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DeleteAction id={row.original._id} />
          <DropdownMenuItem>View Detail</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "_id",
    header: "ID",
    cell: ({ row }) => {
      const id = row.original._id;
      return (
        <span className="font-mono text-sm">
          {id.toString().slice(0, 6)}...
        </span>
      );
    },
  },
  {
    accessorKey: "content",
    header: "Content",
    cell: ({ row }) => {
      const content = row.original.content;
      return (
        <span className="text-sm line-clamp-5">
          {content?.slice(0, 10)}
          {content?.length > 10 && "..."}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      const date = row.original.createdAt;
      return <span>{format(new Date(date), "dd MMM yyyy, HH:mm")}</span>;
    },
  },
];

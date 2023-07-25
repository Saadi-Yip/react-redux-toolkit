import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const BASE_URL = "https://solitary-dev.cyclic.app";
const useCrudApi = (resource) => {
  const queryClient = useQueryClient();
  // Read
  const getItems = async () => {
    const response = await fetch(`${BASE_URL}${resource}`);
    return response.json();
  };
  const getSingleItem = async (id) => {
    const response = await fetch(`${BASE_URL}${resource}/${id}`);
    return response.json();
  };

  // Create
  const createItem = async (itemData) => {
    const response = await axios.post(`${BASE_URL}${resource}`, itemData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

    return response.data;
  };

  // Update an existing post
  const updateData = async (data) => {
    console.log(`Updating ${data.id} with ${data.project}` )
    const response = await axios.patch(`${BASE_URL}${resource}/${data.id}`, data.project);
    return response.data;
  };

  // Delete
  const deleteItem = async (itemId) => {
    await fetch(`${BASE_URL}${resource}/${itemId}`, {
      method: "DELETE",
    });
  };

  // React Query hooks
  const { data, isLoading, isError } = useQuery(resource, getItems);
  const createMutation = useMutation(createItem, {
    onSuccess: () => {
      // Invalidate the query to refetch data after successful creation
      queryClient.invalidateQueries(resource);
    },
  });
  const updateMutation = useMutation(updateData, {
    onSuccess: () => {
      queryClient.invalidateQueries(resource);
    },
  });

  const deleteMutation = useMutation(deleteItem, {
    onSuccess: () => {
      // Invalidate the query to refetch data after successful deletion
      queryClient.invalidateQueries(resource);
    },
  });

  return {
    data,
    isLoading,
    isError,
    getSingleItem,
    createItem: createMutation.mutate,
    updateData: updateMutation.mutate,
    deleteItem: (id) => deleteMutation.mutate(id),
  };
};
export default useCrudApi;

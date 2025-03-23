import { Skeleton, Stack } from "@mui/material";

const LoadingSkeleton = () => {
  return (
    <Stack spacing={4}>
      <Skeleton variant="rounded" width="100%" height={30} />
      <Skeleton variant="rounded" width="100%" height={80} />
      <Skeleton variant="rounded" width="100%" height={80} />
      <Skeleton variant="rounded" width="100%" height={80} />
    </Stack>
  );
};

export default LoadingSkeleton;

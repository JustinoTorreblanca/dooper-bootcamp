import Link from "next/link";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomAlert from "@src/components/CustomAlert";
import { useAuth } from "@src/contexts/AuthContext";
import useCategoriesHook from "@src/hooks/useCategories";

const Categories = () => {
  const { user } = useAuth();
  const { categories, isLoading, isError } = useCategoriesHook({
    userId: user?.id
  });

  if (isError) {
    <CustomAlert
      message="An error occurred while fetching categories, please try again"
      severity="error"
    />;
  }

  if (isLoading) {
    <CustomAlert message="Loading..." severity="success" />;
  }

  return (
    <div>
      <Typography variant="h3" marginBottom="30px">
        Categories:
      </Typography>
      <Box marginBottom="30px">
        {categories?.map((category) => {
          return (
            <Link
              href={`/admin/categories/${category.id}`}
              passHref={true}
              key={category.id}
            >
              <a>
                <Box key={category.id} display="flex" flexDirection="column">
                  <span>{category.title}</span>
                </Box>
              </a>
            </Link>
          );
        })}
      </Box>
    </div>
  );
};

export default Categories;

import Box, { BoxProps } from "@mui/material/Box";

export const Item: React.FC<BoxProps> = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: "center",
        fontSize: 19,
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
};

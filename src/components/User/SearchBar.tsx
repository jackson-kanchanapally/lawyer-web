import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  const router = useRouter();
  const size = useBreakpointValue({ base: "sm", md: "md" });
  const [showBoxShadow, setBoxShadow] = useState(false);
  const boxShadowValue = {
    base: "none",
    sm: useColorModeValue("md", "dark-lg"),
  };
  const searchItems = [
    "Civil Law",
    "Criminal Law",
    "Divorce",
    "Immigration Law",
    "Tax Law",
    "Medical Law",
  ];
  return (
    <Box
      boxShadow={showBoxShadow ? boxShadowValue : undefined}
      borderTopRadius={10}
      zIndex={10}
    >
      <InputGroup size={size}>
        <Input
          width="40rem"
          placeholder="Search your Lawyer"
          variant="flushed"
          onFocus={() => setBoxShadow(true)}
          onBlur={() => setBoxShadow(false)}
        />
        <InputLeftElement width="3rem">
          <SearchIcon w={4} h={4} />
        </InputLeftElement>
      </InputGroup>
      {showBoxShadow && (
        <Box position="relative">
          <List
            spacing={3}
            backgroundColor="gray.800"
            w="100%"
            position="absolute"
            boxShadow={showBoxShadow ? boxShadowValue : undefined}
            borderBottomRadius={10}
            pt={3}
            pb={3}
          >
            {searchItems.map((value, index) => (
              <ListItem
                onClick={() => router.push("/user/searchresults")}
                css={{
                  ":hover": {
                    backgroundColor: "#2D3748",
                    cursor: "pointer",
                  },
                }}
                pl={3}
                pr={3}
                pt={2}
                pb={2}
                key={index}
              >
                <ListIcon as={SearchIcon} color="green.500" />
                {value}
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
};

export default Search;

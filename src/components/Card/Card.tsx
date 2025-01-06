import { Box, Text, VStack, Link, Image } from "@chakra-ui/react";
import Barcode from "react-barcode";

const Card = ({ suffix }: { suffix: number }) => {
  const barcodeValue = `0024-0011-${suffix?.toString()?.padStart(4, "0")}`;
  return (
    <Box
      width="240px"
      height="430px"
      bg="#ebebeb"
      px={4}
      py={12}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      {/* Logo */}
      <Box>
        <Image
          src="/logo/logo.png"
          alt="SAMC Logo"
          width="60px"
          height="60px"
        />
      </Box>

      {/* Large Number */}
      <Text
        fontSize="4xl"
        fontWeight={600}
        color="#0c6454"
        textAlign="center"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        {suffix.toString().padStart(4, "0")}
      </Text>

      {/* Barcode */}
      <Box alignItems="center">
        <Barcode
          value={barcodeValue}
          format="CODE128"
          height={50}
          width={1.1}
          fontSize={10}
          displayValue={true}
          margin={3}
        />
      </Box>

      {/* Contact Information */}
      <VStack spacing="1" mt="2">
        <Link href="mailto:info@samcbangladesh.org" fontSize="sm">
          info@samcbangladesh.org
        </Link>
        <Link
          href="https://www.samcbangladesh.org"
          fontSize="sm"
          textDecoration="underline"
        >
          www.samcbangladesh.org
        </Link>
      </VStack>

      {/* Address */}
      <VStack spacing="1">
        <Text fontSize="10px" textAlign="center" mt="2">
          চন্দিপুর, চাঁপাইনবাবগঞ্জ, রাজশাহী ৬৩০০, বাংলাদেশ
        </Text>
      </VStack>
    </Box>
  );
};

export default Card;

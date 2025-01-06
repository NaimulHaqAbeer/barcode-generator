"use client";

import { Button, Grid, Input, VStack, Text, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Card from "@/components/Card/Card";
import generatePDF, { usePDF, Options, Margin, Resolution } from "react-to-pdf";
import { generateRange } from "@/lib/config/constants";

const options: Options = {
  filename: "samc-cards.pdf",
  resolution: Resolution.HIGH,
  method: "save",
  page: {
    margin: Margin.SMALL,
    format: "A4",
    orientation: "landscape",
  },
};

export default function Home() {
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [range, setRange] = useState<number[]>(generateRange(start, end));

  const handleGenerate = () => {
    if (start > end) {
      alert("Start value must be less than or equal to End value.");
      return;
    }
    setRange(generateRange(start, end));
  };

  const openPDF = () => {
    generatePDF(() => document.getElementById("wrapper"), options);
  };

  return (
    <div>
      {/* Input and Button for Range */}
      <Flex flexDir="column" gap={4} p={4}>
        <Text fontWeight={700} fontSize="2rem">
          Generate SAMC Cards
        </Text>
        <Flex alignItems="center" gap={4}>
          <Text fontWeight="bold">Start Value</Text>
          <Input
            placeholder="Start Value"
            type="number"
            value={start}
            w="fit-content"
            onChange={(e) => setStart(Number(e.target.value))}
          />
          <Text fontWeight="bold">End Value</Text>
          <Input
            placeholder="End Value"
            type="number"
            value={end}
            w="fit-content"
            onChange={(e) => setEnd(Number(e.target.value))}
          />
          <Button colorScheme="blue" onClick={handleGenerate}>
            Generate
          </Button>
          <Button colorScheme="green" w="fit-content" onClick={openPDF}>
            Download PDF
          </Button>
        </Flex>
      </Flex>

      {/* Grid of Cards */}
      <Grid
        id="wrapper"
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(5, 1fr)" }}
        gap={4}
        px={2}
        mt={4}
        style={{ pageBreakBefore: "always" }}
        maxW="fit-content"
      >
        {range.map((value) => (
          <Card key={value} suffix={value} />
        ))}
      </Grid>
    </div>
  );
}

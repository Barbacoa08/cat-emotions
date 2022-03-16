import { Box, Heading, Text } from "@chakra-ui/react";
import netlifyIdentity from "netlify-identity-widget";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

export const CatHistory = () => {
  const user = netlifyIdentity.currentUser();

  return (
    <Box>
      <Heading>Cat History</Heading>

      {/** `!user` IS TEMPORARY, DO NOT CHECKIN */}
      {!user ? (
        <Box>
          <Text>https://recharts.org/en-US/examples/SimpleRadarChart</Text>

          {/* <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer> */}
          <RadarChart
            cx={300}
            cy={250}
            outerRadius={150}
            width={500}
            height={500}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Mike"
              dataKey="A"
              stroke="#8884d8"
              fill="#8884d8"
              fillOpacity={0.6}
            />
          </RadarChart>
        </Box>
      ) : (
        <Text>
          Ope, you need to sign in and create at least one Cat Emotion before
          you can view your history.
        </Text>
      )}
    </Box>
  );
};

import { CatEmotionImageProps } from "components/CatEmotionImage";

import atPeace from "./at-peace.jpg";
import beingEaten from "./being-eaten.jpg";
import cuddly from "./cuddly.jpg";
import destructive from "./destructive-guilty-uncaring.jpg";
import grumpy from "./grumpy.jpg";
import happy from "./happy.jpg";
import mischievous from "./mischievous.jpg";
import sleepy from "./sleepy.jpg";
import surprisedGuilty from "./surprised-guilty.jpg";
import surprised from "./surprised.jpg";

export const allCatImages: CatEmotionImageProps[] = [
  {
    src: atPeace,
    tags: ["happy", "content"],
    alt: "image of a cat on the top of a mountain breathing deeply, seemingly at peace with the world",
  },
  {
    src: beingEaten,
    tags: ["annoyed", "apathetic"],
    alt: "image of a cat being gently chomped on by a large dog, the cat appears to not care",
  },
  {
    src: cuddly,
    tags: ["cuddly"],
    alt: "image of a mother cat curled up and sleeping with it's kitten embraced",
  },
  {
    src: destructive,
    tags: ["destructive", "angry"],
    alt: "image of a cat sitting on a completely destroyed chair looking guilty and completely uncaring",
  },
  {
    src: grumpy,
    tags: ["grumpy"],
    alt: "image of grumpy cat",
  },
  {
    src: happy,
    tags: ["happy", "smiley"],
    alt: "image of a cat staring into the camera with closed eyes and a happy smile",
  },
  {
    src: mischievous,
    tags: ["mischievous"],
    alt: "image of a cat with a paw up and a mischievous smirk on it's face",
  },
  {
    src: sleepy,
    tags: ["sleepy"],
    alt: "image of a cat yawning while a human hand scratches it's belly",
  },
  {
    src: surprisedGuilty,
    tags: ["guilty"],
    alt: "image of a cat laying in a basket looking half-asleep and surprised to see the camera in a guilty sort of way",
  },
  {
    src: surprised,
    tags: ["surprised"],
    alt: "image of a cat with both paws up and looking very surprised at the camera",
  },
];

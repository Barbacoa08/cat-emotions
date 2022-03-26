import { CatEmotionImageProps } from "components/CatEmotionImage";

// import addYourOwn from "./add-your-own.png"; // manually added at end of list in `EmotionSelect.tsx`

import anxious from "./anxious.jpg";
import atPeace from "./at-peace.jpg";
import beingEaten from "./being-eaten.jpg";
import contemplative from "./contemplative.jpg";
import cuddly from "./cuddly.jpg";
import curious from "./curious.jpg";
import destructive from "./destructive-guilty-uncaring.jpg";
import fake from "./fake.jpg";
import grumpy from "./grumpy.jpg";
import happy from "./happy.jpg";
import incensed from "./incensed.jpg";
import mischievous from "./mischievous.jpg";
import obstinate from "./obstinate.jpg";
import proud from "./proud.jpg";
import shocked from "./shocked.jpg";
import sick from "./sick.jpg";
import sickGrumpy from "./sick-grumpy.jpg";
import sleepy from "./sleepy.jpg";
import surprised from "./surprised.jpg";
import surprisedGuilty from "./surprised-guilty.jpg";
import suspicious from "./suspicious.jpg";
import tense from "./tense.jpg";
import unamused from "./unamused.jpg";

export const allCatImages: CatEmotionImageProps[] = [
  {
    src: anxious,
    tags: ["anxious", "tense", "scared"],
    alt: "image of a cat mostly curled up and in a corner, appearing to be staring intently at something off camera",
  },
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
    src: contemplative,
    tags: ["contemplative"],
    alt: "image of a cat laying down by a window and looking out in a calm, contemplative way",
  },
  {
    src: cuddly,
    tags: ["cuddly"],
    alt: "image of a mother cat curled up and sleeping with it's kitten embraced",
  },
  {
    src: curious,
    tags: ["curious"],
    alt: "image of a cat laying down in a relaxed manner, looking back at something with a curious look on it's face",
  },
  {
    src: destructive,
    tags: ["destructive", "angry"],
    alt: "image of a cat sitting on a completely destroyed chair looking guilty and completely uncaring",
  },
  {
    src: fake,
    tags: ["fake", "eccedentesiast"],
    alt: "image of a cat staring into the camera with a piece of paper covering it's mouth that has a drawn on smile",
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
    src: incensed,
    tags: ["incensed", "angry", "frustrated"],
    alt: "image of a cat sitting straight up with it's ears pulled back and a incensed face",
  },
  {
    src: mischievous,
    tags: ["mischievous"],
    alt: "image of a cat with a paw up and a mischievous smirk on it's face",
  },
  {
    src: obstinate,
    tags: ["obstinate", "playful"],
    alt: "image of a cat with it's ears perked up, eyes narrowed, and sticking it's tongue out",
  },
  {
    src: proud,
    tags: ["proud"],
    alt: "image of a finely groomed cat with it's eyes closed and a proud looking smile on it's face",
  },
  {
    src: shocked,
    tags: ["shocked", "confused"],
    alt: "image of a cat with wide open eyes and mouth agape with it's tongue slightly out, as if something shocked it as it was about to clean itself",
  },
  {
    src: sick,
    tags: ["sick", "pain"],
    alt: "image of a cat sleeping on it's back with a paw on it's face, the other paw holding a thermometer, and a cold compress on it's head",
  },
  {
    src: sickGrumpy,
    tags: ["sick", "grumpy", "sleepy"],
    alt: "image of a grumpy cat sitting up with a cold compress on it's head, a thermometer in it's mouth, and it's tail wrapped around some cough syrup ",
  },
  {
    src: sleepy,
    tags: ["sleepy"],
    alt: "image of a cat yawning",
  },
  {
    src: surprised,
    tags: ["surprised"],
    alt: "image of a cat with both paws up and looking very surprised at the camera",
  },
  {
    src: surprisedGuilty,
    tags: ["guilty"],
    alt: "image of a cat laying in a basket looking half-asleep and surprised to see the camera in a guilty sort of way",
  },
  {
    src: suspicious,
    tags: ["suspicious", "doubtful"],
    alt: "image of a cat with both ears up and one slightly cocked to the side, with it's whiskers turned slightly down and one eye slightly closed in a face that make it look as if it is highly suspicious",
  },
  {
    src: tense,
    tags: ["tense"],
    alt: "image of a cat that is partially crouched and focused, appearing as if it is ready to pounce",
  },
  {
    src: unamused,
    tags: ["unamused"],
    alt: "image of a cat whose face is mostly blank with eyes half closed as if to say, 'really?'",
  },
];

export const allTags = Array.from(
  new Set<string>(allCatImages.map(({ tags }) => tags).flat())
);

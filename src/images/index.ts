import { CatEmotionImageProps } from "components/CatEmotionImage";

// import addYourOwn from "./add-your-own.png"; // manually added at end of list in `EmotionSelect.tsx`

import anxious from "./anxious.jpg";
import atPeace from "./at-peace.jpg";
import beingEaten from "./being-eaten.jpg";
import blerg from "./blerg.jpg";
import burntOutDesperate from "./burnt-out-desperate-stressed-confused.jpg";
import chilly from "./chilly.jpg";
import coldUnhappy from "./cold-unhappy.jpg";
import confusedAngryExasperated from "./confused-angry-exasperated.jpg";
import contemplative from "./contemplative.jpg";
import cozy from "./cozy.jpg";
import crying from "./crying.jpg";
import cuddly from "./cuddly.jpg";
import curious from "./curious.jpg";
import destructive from "./destructive-guilty-uncaring.jpg";
import exasperatedConcerned from "./exasperated-concerned.jpg";
import exasperatedTired from "./exasperated-tired.jpg";
import exasperatedUpset from "./exasperated-upset.jpg";
import exasperated from "./exasperated.jpg";
import fake from "./fake.jpg";
import grumpy from "./grumpy.jpg";
import happy from "./happy.jpg";
import incensed from "./incensed.jpg";
import industriousProductive from "./industrious-productive.jpg";
import irritated from "./irritated.jpg";
import judgemental from "./judgemental.jpg";
import mischievous from "./mischievous.jpg";
import needyPleadingYearnful from "./needy-pleading-yearnful.jpg";
import obstinate from "./obstinate.jpg";
import playful from "./playful.jpg";
import proud from "./proud.jpg";
import rageful from "./rageful-angry-pissed-judgemental.jpg";
import regal from "./regal-upset-proud.jpg";
import sadThumbsUp from "./sad-thumbsup.jpg";
import sad from "./sad.jpg";
import sexy from "./sexy.jpg";
import shocked2 from "./shocked-surprised-astonished.jpg";
import shocked from "./shocked.jpg";
import shriekingScreaming from "./shrieking-screaming.jpg";
import sickGrumpy from "./sick-grumpy.jpg";
import sick from "./sick.jpg";
import sleepy2 from "./sleepy-2.jpg";
import sleepyFierceYawn from "./sleepy-fierce-yawn.jpg";
import sleepy from "./sleepy.jpg";
import surprisedAlt from "./surprised-alt.jpg";
import surprisedGuilty from "./surprised-guilty.jpg";
import surprised from "./surprised.jpg";
import suspicious from "./suspicious.jpg";
import tense from "./tense.jpg";
import tiredCrankyUpsetFrownAnnoyed from "./tired-cranky-upset-frown-annoyed.jpg";
import unamused from "./unamused.jpg";
import unimpressed from "./unimpressed.jpg";
import wtfSurprised from "./wtf-surprised.jpg";

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
    src: blerg,
    tags: ["blerg", "blah", "tired", "apathetic"],
    alt: "image of a cat laying down with an apathetic look on its face",
  },
  {
    src: burntOutDesperate,
    tags: ["burnt-out", "desperate", "stressed", "confused"],
    alt: "image of a cat with it's fur mostly matted down with one eye half closed and one ear folded back looking at the camera",
  },
  {
    src: chilly,
    tags: ["chilly", "interested"],
    alt: "image of a cat outside while it's snowing, the cat has a small amount of snow flakes on its body and a piqued-interested facial expression",
  },
  {
    src: coldUnhappy,
    tags: ["cold", "unhappy"],
    alt: "image of a cat outside while it's snowing, the cat has a small amount of snow flakes on its body and appears to be unhappy",
  },
  {
    src: confusedAngryExasperated,
    tags: ["confused", "angry", "exasperated"],
    alt: "image of a cat with it's ears pinned back and eyes narrowed with it's mouth partially open looking confused and angry",
  },
  {
    src: contemplative,
    tags: ["contemplative"],
    alt: "image of a cat laying down by a window and looking out in a calm, contemplative way",
  },
  {
    src: cozy,
    tags: ["cozy"],
    alt: "image of a cat laying in front of a window with a mug in front of it with a scarf around it's neck looking very cozy",
  },
  {
    src: crying,
    tags: ["sad", "crying"],
    alt: "image of a kitten standing up with an extremely sad looking face",
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
    tags: ["destructive", "angry", "irritated"],
    alt: "image of a cat sitting on a completely destroyed chair looking guilty and completely uncaring",
  },
  {
    src: exasperatedConcerned,
    tags: ["exasperated", "concerned"],
    alt: "image of a cat laying on it's back with the camera looking down on it while the cat looks up and away from the camera with a 'are you done yet' eye rolling attitude",
  },
  {
    src: exasperatedTired,
    tags: ["exasperated", "tired"],
    alt: "image of a parent and kitten playing together, the kitten looks extremely excited while the parent (the focus of the image) appears to be exhausted and exasperated with the kitten",
  },
  {
    src: exasperatedUpset,
    tags: ["exasperated", "upset"],
    alt: "image of a cat with it's whiskers turned down, it's eyes narrowed, and ears slightly down, appearing to be quite a bit upset and exasperated",
  },
  {
    src: exasperated,
    tags: ["exasperated"],
    alt: "image of a cat staring wide eyed into the camera with an exasperated look on it's face",
  },
  {
    src: fake,
    tags: ["fake", "eccedentesiast", "unimpressed"],
    alt: "image of a cat staring into the camera with a piece of paper covering it's mouth that has a drawn on smile",
  },
  {
    src: grumpy,
    tags: ["grumpy", "irritated"],
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
    src: industriousProductive,
    tags: ["industrious", "productive"],
    alt: "image of a cat sitting at a tiny desk and appearing to work on a laptop, the cat even has it's paws on the mouse and laptop keyboard",
  },
  {
    src: irritated,
    tags: ["irritated"],
    alt: "image of a cats face staring straight at the camera with eyes narrowed and looking particularly irritated",
  },
  {
    src: judgemental,
    tags: ["judgemental"],
    alt: "image of a cat's face with a disproving and highly judgemental look on it's face, the text 'judging intensifies' is written on the image",
  },
  {
    src: mischievous,
    tags: ["mischievous"],
    alt: "image of a cat with a paw up and a mischievous smirk on it's face",
  },
  {
    src: needyPleadingYearnful,
    tags: ["needy", "pleading", "yearnful"],
    alt: "image of a cat reaching up a person's leg with a pleading look on it's face to be picked up",
  },
  {
    src: obstinate,
    tags: ["obstinate", "playful"],
    alt: "image of a cat with it's ears perked up, eyes narrowed, and sticking it's tongue out",
  },
  {
    src: playful,
    tags: ["playful"],
    alt: "image of cat in a box with a playful look on it's face",
  },
  {
    src: proud,
    tags: ["proud"],
    alt: "image of a finely groomed cat with it's eyes closed and a proud looking smile on it's face",
  },
  {
    src: rageful,
    tags: ["rageful", "angry", "pissed", "judgemental"],
    alt: "image of a cat with it's whiskers turned down, it's ears perked up, and an angry, disproving, judgemental look on it's face",
  },
  {
    src: regal,
    tags: ["regal", "upset", "proud", "unhappy"],
    alt: "close image of a cat's face with a regal and proud look on it's face, but also perhaps slightly unhappy or upset",
  },
  {
    src: sadThumbsUp,
    tags: ["sad", "crying", "perseverant"],
    alt: "image of a cat with a sad face giving a thumbs up",
  },
  {
    src: sad,
    tags: ["sad", "crying"],
    alt: "image of a cat's face that appears to be crying",
  },
  {
    src: sexy,
    tags: ["sexy", "relaxed"],
    alt: "image of a cat stretched out on it's back in a (funny) sexy pose",
  },
  {
    src: shocked2,
    tags: ["shocked", "surprised", "astonished"],
    alt: "image of a cat partially inside of scrap wrapping paper with one ear cocked and one straight up, with wide eyes in a shocked, surprised, and/or astonished expression",
  },
  {
    src: shocked,
    tags: ["shocked", "confused"],
    alt: "image of a cat with wide open eyes and mouth agape with it's tongue slightly out, as if something shocked it as it was about to clean itself",
  },
  {
    src: shriekingScreaming,
    tags: ["shrieking", "screaming"],
    alt: "image of a cat sitting down in the grass with it's mouth wide open and screaming",
  },
  {
    src: sick,
    tags: ["sick", "pain"],
    alt: "image of a cat sleeping on it's back with a paw on it's face, the other paw holding a thermometer, and a cold compress on it's head",
  },
  {
    src: sickGrumpy,
    tags: ["sick", "grumpy", "sleepy"],
    alt: "image of a grumpy cat sitting up with a cold compress on it's head, a thermometer in it's mouth, and it's tail wrapped around some cough syrup",
  },
  {
    src: sleepy2,
    tags: ["sleepy", "exhausted"],
    alt: "image of a cat laying on it's side with both eye's mostly closed and a sleepy look on it's face",
  },
  {
    src: sleepy,
    tags: ["sleepy"],
    alt: "image of a cat yawning",
  },
  {
    src: sleepyFierceYawn,
    tags: ["sleepy", "fierce", "yawn"],
    alt: "close up image of a cat yawning, with some particularly long looking fangs",
  },
  {
    src: surprised,
    tags: ["surprised"],
    alt: "image of a cat with both paws up and looking very surprised at the camera",
  },
  {
    src: surprisedAlt,
    tags: ["surprised", "alert"],
    alt: "image of a cat laying on it's back on a carpet looking up at the camera with ears perked",
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
    src: tiredCrankyUpsetFrownAnnoyed,
    tags: ["tired", "cranky", "upset", "frown", "annoyed"],
    alt: "image of a cat sitting on a bed with it's eyes narrowed looking like it has just woken up and is NOT happy about it",
  },
  {
    src: unamused,
    tags: ["unamused", "dubious"],
    alt: "image of a cat whose face is mostly blank with eyes half closed as if to say, 'really?'",
  },
  {
    src: unimpressed,
    tags: ["unimpressed"],
    alt: "image of a cat laying down on a pillow with it's front paws crossed over each other and a, very, unimpressed expression on it's face",
  },
  {
    src: wtfSurprised,
    tags: ["wtf", "surprised", "confused"],
    alt: "image of a cat with it's eyes wide open and a wtf expression on it's face, as it looks at the camera",
  }
];

export const allTags = Array.from(
  new Set<string>(allCatImages.map(({ tags }) => tags).flat())
);

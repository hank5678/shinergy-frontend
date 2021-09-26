import React from "react"
import bg from "../images/cover/bg.png"
import characterLeft1 from "../images/cover/character-left-1.png"
import characterLeft2 from "../images/cover/character-left-2.png"

import characterRight1 from "../images/cover/character-right-1.png"
import characterRight2 from "../images/cover/character-right-2.png"
import characterRight3 from "../images/cover/character-right-3.png"
import characterRight4 from "../images/cover/character-right-4.png"
import characterRight5 from "../images/cover/character-right-5.png"

import dragonTail from "../images/cover/dragon-tail.png"
import weapon from "../images/cover/weapon.png"
import title from "../images/cover/title.png"
import frontBg from "../images/cover/front-bg.png"
import backBg from "../images/cover/back-bg.png"
import Image from "next/image"
import Box from "components/Box"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const MotionBox = motion(Box)

const delayCount = (count) => 0.25 * count

const characterLeft1Variants = {
  initial: { opacity: 0, x: -150, y: 20 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delayCount(2),
    },
  },
}

const dragonTailVariants = {
  initial: { opacity: 0, x: 100, y: -20 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delayCount(2),
    },
  },
}

const characterLeft2Variants = {
  initial: { opacity: 0, x: -100, y: -30 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delayCount(3),
    },
  },
}

const characterRight1Variants = {
  initial: { opacity: 0, x: 100, y: 30 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delayCount(4),
    },
  },
}

const characterRight5Variants = {
  initial: { opacity: 0, x: 100, y: -30 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delayCount(5),
    },
  },
}

const characterRight2Variants = {
  initial: { opacity: 0, x: 100, y: 30 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delayCount(6),
    },
  },
}
const characterRight4Variants = {
  initial: { opacity: 0, x: 100, y: -30 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delayCount(7),
    },
  },
}

const characterRight3Variants = {
  initial: { opacity: 0, x: 100, y: -30 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delayCount(8),
    },
  },
}

const weaponVariants = {
  initial: { opacity: 0, x: 150, y: 30 },
  inView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delayCount(9),
    },
  },
}

const titleVariants = {
  initial: { opacity: 0, scale: 1.5 },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: delayCount(1),
    },
  },
}

const bgVariants = {
  initial: { opacity: 0, scale: 1.1 },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: delayCount(1),
    },
  },
}

export default function Cover() {
  const { ref, entry } = useInView({ threshold: 0.1, triggerOnce: false })

  return (
    <Box ref={ref} position="relative">
      <Image loading="eager" src={bg} alt="" width="2222" height="1144" layout="responsive" />
      <Box position="absolute" top="0%" left="0" width="100%">
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={bgVariants}>
          <Image loading="eager" src={backBg} alt="" width="2222" height="1144" layout="responsive" />
        </MotionBox>
      </Box>

      <Box position="absolute" top="0%" left="-10%" width="45%">
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={dragonTailVariants}>
          <Image loading="eager" src={dragonTail} alt="" width="826" height="631" layout="responsive" />
        </MotionBox>
      </Box>
      <Box position="absolute" top="50%" left="50%" width="16%" style={{ transform: "translate(-50%, -50%)" }}>
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={titleVariants}>
          <Image loading="eager" src={title} alt="" width="333" height="753" layout="responsive" />
        </MotionBox>
      </Box>
      <Box position="absolute" top="-5%" left="-12%" width="45%">
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={characterLeft2Variants}>
          <Image loading="eager" src={characterLeft2} alt="" width="822" height="546" layout="responsive" />
        </MotionBox>
      </Box>
      <Box position="absolute" top="43%" left="-3%" width="45%">
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={characterLeft1Variants}>
          <Image loading="eager" src={characterLeft1} alt="" width="784" height="500" layout="responsive" />
        </MotionBox>
      </Box>

      <Box position="absolute" top="58%" right="16%" width="38%">
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={characterRight3Variants}>
          <Image loading="eager" src={characterRight3} alt="" width="832" height="485" layout="responsive" />
        </MotionBox>
      </Box>

      <Box position="absolute" top="15%" right="0%" width="17%">
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={characterRight5Variants}>
          <Image loading="eager" src={characterRight5} alt="" width="390" height="448" layout="responsive" />
        </MotionBox>
      </Box>
      <Box position="absolute" top="20%" right="11%" width="27%">
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={characterRight4Variants}>
          <Image loading="eager" src={characterRight4} alt="" width="642" height="640" layout="responsive" />
        </MotionBox>
      </Box>
      <Box position="absolute" top="48%" right="4.5%" width="20%">
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={characterRight2Variants}>
          <Image loading="eager" src={characterRight2} alt="" width="428" height="600" layout="responsive" />
        </MotionBox>
      </Box>
      <Box position="absolute" bottom="0%" right="0%" width="35%">
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={characterRight1Variants}>
          <Image loading="eager" src={characterRight1} alt="" width="784" height="500" layout="responsive" />
        </MotionBox>
      </Box>

      <Box position="absolute" top="39%" right="18%" width="23%">
        <MotionBox initial="initial" animate={entry?.isIntersecting ? "inView" : "initial"} variants={weaponVariants}>
          <Image loading="eager" src={weapon} alt="" width="536" height="285" layout="responsive" />
        </MotionBox>
      </Box>
    </Box>
  )
}

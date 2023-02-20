import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  chakra,
  Link,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import Image from 'next/legacy/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { prefix } from '../utils/prefix'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Layout>
      <Container>
        <Section delay={0}>
          <Box align="center">
            <Image
              src={`${prefix}/card.png`}
              alt="Dan Abramov"
              // boxSize="200px"
              width={862}
              height={470}
              // display="inline-block"
            />
          </Box>
        </Section>

        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          align="center"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a Software Engineer based in Guangzhou, China!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Levi Shao
            </Heading>
            <p>A Developer who still on his way</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/Levi.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Levi is a Software Engineer based in Guangzhou, China with a passion
            for building digital services/stuff he wants. He is full of
            curiosity about all things launching products, from planning and
            designing all the way to solving real-life problems with code.
            Currently, he is working at a world-renowned short video company
            called <Link href="https://www.tiktok.com/about">TikTok</Link>.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="https://github.com/J1aM1ng" passHref scroll={false}>
              <Button
                leftIcon={<IoLogoGithub />}
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
              >
                My GitHub
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Biography
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Zibo, China.
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Working at TikTok, Guangzhou.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Expect to complete the Bachelor&apos;s Program in the School of
            Computer Science and Technology at Shandong University of Computer
            Science and Technology.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Music, Play Computer Games, Visualization</Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

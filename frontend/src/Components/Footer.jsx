import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Container, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Container
        maxW={"100%"}
        bgColor={"rgb(51,51,51)"}
      >
        <Box 
          border={"1px"} 
          borderColor={"rgb(51,51,51)"}  
          margin={"auto"} 
          maxW={["95%","80%","65%"]}>
        <Text 
          color={"white"} 
          fontSize={["3xl","4xl","5xl"]} 
          fontWeight={700} 
          textAlign={"center"} 
          marginTop={"5%"} 
          marginBottom="10"
          >
            Questions? Answers.</Text>
          <Accordion 
            maxW={"100%"}  
            allowMultiple 
            allowToggle
          >
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                        What is Apple TV+?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    Apple TV+ is a streaming service from Apple. It features exclusive Apple Original shows and 
                    movies from some of the industry’s top talent, 
                    with new premieres arriving each month. Browse all of the available content on 
                    Apple TV+ inside the Apple TV app on the “Apple TV+” tab or here on <Link href='https://tv.apple.com/gb?l=in' color={"#0a84ff"} >tv.apple.com</Link>.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                        What does Apple TV+ include?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    Apple TV+ includes Apple Original films and series — which are original shows and 
                    movies made exclusively for Apple. It also includes free access for anyone to watch 
                    Friday Night Baseball, provided through Apple TV+ in partnership with MLB (Major League Baseball). 
                    New shows and movies are being added to the streaming service frequently, 
                    so browse inside the Apple TV app or visit 
                    <Link href='https://tv.apple.com/gb?l=in' color={"#0a84ff"} >tv.apple.com</Link>.
                    often to see new releases.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                        Where can I watch Apple TV+?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    Apple TV+ is an exclusive streaming subscription available in the Apple TV app. 
                    You can find the Apple TV app on many of your favourite Apple devices. Plus, find the app on  
                    <Link href='https://support.apple.com/en-in/guide/tvplus/welcome/web' color={"#0a84ff"} > many smart TVs, 
                    streaming devices, game consoles and some select cable boxes</Link>.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                        Can I watch Apple TV+ on my phone?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    Apple TV+ is a streaming service that lives inside the Apple TV app — an app that brings Apple TV+ together with 
                    <Link href='https://support.apple.com/en-in/HT209670' color={"#0a84ff"} > other streaming service subscriptions that you add</Link>.
                    You can find the
                    <Link href='https://support.apple.com/en-in/guide/tvplus/apd5a38547d1/1.0/web/1.0' color={"#0a84ff"} >
                      Apple TV app on iPhone, iPad, Apple TV 4K or HD</Link>
                      , plus on many streaming devices and smart TVs like 
                    <Link href='https://support.apple.com/en-in/guide/tvplus/apda10aaed81/1.0/web/1.0' color={"#0a84ff"} > Roku, Samsung, LG, Panasonic and more</Link>.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                        How to watch Apple TV+ on Android or Windows?
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    The easiest way to watch Apple TV+ on an Android phone or Windows device is to visit 
                    <Link href='https://tv.apple.com/gb?l=en' color={"#0a84ff"} > other streaming service subscriptions that you add</Link>.
                    . There, you can still sign in with an Apple ID, add Apple Original shows and movies to your Up Next watchlist and keep 
                    track of what you are watching.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                       What movies are on Apple TV+?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    There are many movies to choose from on Apple TV+ and new Apple Original films are being added frequently. 
                    The best way to see what movies are on Apple TV+ is to browse the Apple TV+ 
                    tab inside the Apple TV app or here on 
                    <Link href='https://tv.apple.com/gb?l=in' color={"#0a84ff"} >tv.apple.com</Link>.
                    . You will find many award-winning films to choose from, like Academy Award-winner for Best 
                    Picture CODA or the critically-acclaimed The Tragedy of Macbeth. Or choose from hits like Greyhound, 
                    Swan Song, Wolfwalkers and more.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                       What can I watch on Apple TV+?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    More Apple Original series are being added to the TV app frequently, so check back often to discover new 
                    TV shows on Apple TV+. Start by browsing in the Apple TV+ tab on the Apple TV app or here on 
                    <Link href='https://tv.apple.com/gb?l=in' color={"#0a84ff"} >tv.apple.com</Link>.
                    . You will find hits like the Emmy-winning Ted Lasso, critically-acclaimed The Morning Show and 
                    sci-fi epic Foundation, plus new and popular shows like Severance, Slow Horses and WeCrashed.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                        How do I get Apple TV+?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    You can subscribe to Apple TV+ inside the Apple TV app on your  
                    <Link href='https://support.apple.com/en-in/guide/tvplus/welcome/web' color={"#0a84ff"} > mobile or living room device</Link>.
                     or on
                    <Link href='https://tv.apple.com/gb?l=in' color={"#0a84ff"} > tv.apple.com</Link>. 
                    . Your subscription to Apple TV+ will use the payment method associated with your Apple ID, 
                    which is your one sign-in for all things Apple. With one Apple account, it’s easy to
                    <Link href='https://support.apple.com/en-in/HT204939' color={"#0a84ff"} > manage your subscription in Settings</Link>
                    on any device or on 
                    <Link href='https://support.apple.com/en-in/HT204939' color={"#0a84ff"} > tv.apple.com</Link>.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                        Can I get Apple TV+ for free?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    There are a few ways to try Apple TV+ for free. First, try 7 days of Apple TV+ for free by starting 
                    a trial in the Apple TV app on your iPhone, iPad, Apple TV 4K or HD, or on any streaming device. 
                    If you have recently purchased Apple hardware that includes a 12‑month, 6‑month, 3‑month or other 
                    complimentary free trial of Apple TV+, this offer will automatically appear in the Apple TV app when 
                    signed in with the Apple ID associated with your recent hardware purchase.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                        How do i cancel Apple TV+?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    The easiest way to cancel an Apple TV+ subscription is to go to Settings on an Apple device 
                    like an iPhone. Open the app, choose your name, then select Subscriptions and choose Apple TV+. 
                    You can also manage your Apple TV+ subscription at  
                    <Link href='https://tv.apple.com/gb?l=in' color={"#0a84ff"} > tv.apple.com</Link>
                    . Sign in and choose the account icon in the top right corner.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                        How do I share Apple TV+ with my family?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    Sharing Apple TV+ through the Apple TV app uses Family Sharing, Apple’s system that helps you to share multiple Apple Services through your Apple ID. First, you need to 
                    <Link href='https://support.apple.com/en-in/HT201088' color={"#0a84ff"} > set up Family Sharing on an Apple device</Link>
                    , then you will be able to share Apple TV+ with your family group.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
          <Accordion mb={"10"} maxW={"100%"}  allowMultiple allowToggle>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      {/* {isExpanded ? <Box>➖</Box> : <Box>➕</Box>} */}
                      <Box
                        color={"white"}
                        // height={"6"}
                        flex="1"
                        mb={"3"}
                        // marginLeft="4"
                        fontSize={["xl","xl","2xl"]}
                        textAlign="start"
                        fontWeight={"400"}
                      >
                        Is Apple TV+ accessible?  
                      </Box>
                      <AccordionIcon color={"rgb(153,153,153)"} h={"20%"} w={"10"} />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel 
                    pr={"90px"} 
                    color={"white"} 
                    pb={8} 
                    textAlign="start" 
                    b={"1px"} 
                    borderColor={"white"}
                  >
                    Apple TV+ is part of the Apple TV app, which includes many accessibility features — so you only 
                    have to focus on enjoying Apple Original shows and movies. All Apple Originals support Closed 
                    Captions and SDH (subtitles for the Deaf and Hard of Hearing) in addition to audio descriptions; 
                    plus the entire app supports VoiceOver, Apple’s built-in screenreader. Bold Text, Increase Contrast 
                    and Reduce Motion settings are also available. Subtitles are supported for 40+ languages 
                    for all Apple TV+ titles.  
                    <Link href='https://support.apple.com/en-in/guide/tvapp/atvbaeff85db/web' color={"#0a84ff"} > Learn about more accessibility options in the Apple TV app.</Link>.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Box>
      </Container>
    </>
  )
}

export default Footer
import {
  Avatar,
  Divider,
  Flex,
  Heading,
  IconButton,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiDollarSign,
  FiSettings,
} from 'react-icons/fi';
import {
  DiReact,
  DiHtml5,
  DiJsBadge,
  DiCode,
  DiVisualstudio,
  DiJqueryLogo,
} from 'react-icons/di';

import { FiLogOut } from 'react-icons/fi#FiLogOut';
import NavItems from './NavItem';
import Dashboard from './Screens/DashboardScreen';
import FrontendInterviewQuestionsScreen from './Screens/FrontendScreen';

export default function Sidebar() {
  const [navSize, changeNavSize] = useState('large');
  return (
    <Flex
      pos="sticky"
      left="5 "
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4PX 12px 0 rgba(0,0,0,0.05)"
      borderRadius={navSize == 'small' ? '15px' : -'30px'}
      w={navSize === 'small' ? '75px' : '200px'}
      flexDir="column"
      justifyContent="space-between">
      <Flex p="5%" flexDir="column" alignItems="flex-start" as="nav">
        <Flex display={navSize === 'small' ? 'none' : 'flex'}>
          <Heading>Front-End Road Map</Heading>
        </Flex>

        <IconButton
          background="none"
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (navSize === 'small') changeNavSize('large');
            else changeNavSize('small');
          }}
        />

        <NavItems
          navSize={navSize}
          icon={FiHome}
          title="Dashboard"
          description=""
          active
          to="/Dashboard"
        />
        <NavItems
          navSize={navSize}
          icon={DiVisualstudio}
          title="Frontend interview Questions"
          to="/FrontendInterviewQuestionsScreen"
        />
        <NavItems
          navSize={navSize}
          icon={DiHtml5}
          title="HTML Crash Course"
          to="/HTMLCrashCourse"
        />
        <NavItems
          navSize={navSize}
          icon={DiCode}
          title="CSS Crash Course"
          to="/CssCrashCourse"
        />
        <NavItems
          navSize={navSize}
          icon={DiJsBadge}
          title="JavaScript Crash Course"
          to="/JavaScriptCrashCourse"
        />
        <NavItems
          navSize={navSize}
          icon={DiReact}
          title="React Js Crash Course"
          to="/ReactCrashCourse"
        />
        <NavItems
          navSize={navSize}
          icon={DiJqueryLogo}
          title="Web dev KeyNotes"
          to="/WebDevkeyNotes"
        />
        <NavItems
          navSize={navSize}
          icon={FiCalendar}
          title="Frontend Quiz"
          to="/FrontEndQuiz"
        />
        <NavItems
          navSize={navSize}
          icon={FiDollarSign}
          title="Balance"
          to="/Balance"
        />
        <NavItems
          navSize={navSize}
          icon={FiSettings}
          title="Settings"
          to="/Settings"
        />
        <NavItems
          navSize={navSize}
          icon={FiLogOut}
          title="Logout"
          to="/Logout"
        />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == 'small' ? 'center' : 'flex-start'}
        mb="4">
        <Divider display={navSize == 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="picture.jpg" />
          <Flex
            flexDir="column"
            ml="4"
            display={navSize === 'small' ? 'none' : '200px'}>
            <Heading>Obaje Josiah</Heading>
            <Text>Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

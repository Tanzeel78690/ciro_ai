// import { NavigationContainer } from "@react-navigation/native"
// import { createNativeStackNavigator } from "@react-navigation/native-stack"

// import HomeScreen from "./src/screens/HomeScreen"
// import ReportIncidentScreen from "./src/screens/ReportIncidentScreen"
// import IncidentsAlertsScreen from "./src/screens/IncidentsAlertsScreen"
// import ResponderScreen from "./src/screens/ResponderScreen"
// import MobileMapScreen from "./src/screens/MobileMapScreen"
// import SeverityAnalysisScreen from "./src/screens/SeverityAnalysisScreen"
// import StakeholderScreen from "./src/screens/StakeholderScreen"
// import AgentTracesScreen from "./src/screens/AgentTracesScreen"

// const Stack = createNativeStackNavigator()

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "#09090b",
//           },
//           headerTintColor: "#fff",
//           contentStyle: {
//             backgroundColor: "#09090b",
//           },
//         }}
//       >
//         <Stack.Screen
//           name="CIRO Mobile"
//           component={HomeScreen}
//         />

//         <Stack.Screen
//           name="Report Incident"
//           component={ReportIncidentScreen}
//         />

//         <Stack.Screen
//           name="Incidents Alerts"
//           component={IncidentsAlertsScreen}
//         />

//         <Stack.Screen
//           name="Responder View"
//           component={ResponderScreen}
//         />

//         <Stack.Screen
//           name="Crisis Map"
//           component={MobileMapScreen}
//         />

//         <Stack.Screen
//           name="Severity Analysis"
//           component={SeverityAnalysisScreen}
//         />

//         <Stack.Screen
//           name="Stakeholder Center"
//           component={StakeholderScreen}
//         />

//         <Stack.Screen
//           name="Agent Traces"
//           component={AgentTracesScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { ThemeProvider, useTheme } from "./src/theme/ThemeContext"

import HomeScreen from "./src/screens/HomeScreen"
import ReportIncidentScreen from "./src/screens/ReportIncidentScreen"
import IncidentsAlertsScreen from "./src/screens/IncidentsAlertsScreen"
import ResponderScreen from "./src/screens/ResponderScreen"
import MobileMapScreen from "./src/screens/MobileMapScreen"
import SeverityAnalysisScreen from "./src/screens/SeverityAnalysisScreen"
import StakeholderScreen from "./src/screens/StakeholderScreen"
import AgentTracesScreen from "./src/screens/AgentTracesScreen"
import ImpactTicketScreen from "./src/screens/ImpactTicketScreen"

const Stack = createNativeStackNavigator()

function AppNavigator() {
  const { theme } = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: theme.card },
          headerTintColor: theme.text,
          contentStyle: { backgroundColor: theme.background },
        }}
      >
        <Stack.Screen name="CIRO Mobile" component={HomeScreen} />
        <Stack.Screen name="Report Incident" component={ReportIncidentScreen} />
        <Stack.Screen name="Incidents Alerts" component={IncidentsAlertsScreen} />
        <Stack.Screen name="Responder View" component={ResponderScreen} />
        <Stack.Screen name="Crisis Map" component={MobileMapScreen} />
        <Stack.Screen name="Severity Analysis" component={SeverityAnalysisScreen} />
        <Stack.Screen name="Stakeholder Center" component={StakeholderScreen} />
        <Stack.Screen name="Agent Traces" component={AgentTracesScreen} />
        <Stack.Screen name="Emergency Impact" component={ImpactTicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  )
}
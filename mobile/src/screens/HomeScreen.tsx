// // import {
// //     View,
// //     Text,
// //     TouchableOpacity,
// //     StyleSheet,
// //   } from "react-native"
  
// //   export default function HomeScreen({ navigation }: any) {
// //     return (
// //       <View style={styles.container}>
// //         <Text style={styles.badge}>CIRO AI</Text>
  
// //         <Text style={styles.title}>
// //           Crisis Response Mobile
// //         </Text>
  
// //         <Text style={styles.subtitle}>
// //           Report incidents, receive alerts, and coordinate field response.
// //         </Text>
  
// //         <TouchableOpacity
// //           style={[styles.button, styles.redButton]}
// //           onPress={() => navigation.navigate("Report Incident")}
// //         >
// //           <Text style={styles.buttonText}>
// //             Report Incident
// //           </Text>
// //         </TouchableOpacity>
  
// //         <TouchableOpacity
// //           style={styles.button}
// //           onPress={() => navigation.navigate("Live Alerts")}
// //         >
// //           <Text style={styles.buttonText}>
// //             View Live Alerts
// //           </Text>
// //         </TouchableOpacity>
  
// //         <TouchableOpacity
// //           style={styles.button}
// //           onPress={() => navigation.navigate("Responder View")}
// //         >
// //           <Text style={styles.buttonText}>
// //             Field Responder View
// //           </Text>
// //         </TouchableOpacity>
// //       </View>
// //     )
// //   }
  
// //   const styles = StyleSheet.create({
// //     container: {
// //       flex: 1,
// //       padding: 24,
// //       justifyContent: "center",
// //       backgroundColor: "#09090b",
// //     },
// //     badge: {
// //       color: "#22d3ee",
// //       fontWeight: "bold",
// //       marginBottom: 10,
// //     },
// //     title: {
// //       color: "white",
// //       fontSize: 36,
// //       fontWeight: "bold",
// //     },
// //     subtitle: {
// //       color: "#a1a1aa",
// //       marginTop: 10,
// //       marginBottom: 32,
// //       lineHeight: 22,
// //     },
// //     button: {
// //       backgroundColor: "#7c3aed",
// //       padding: 16,
// //       borderRadius: 16,
// //       marginBottom: 14,
// //     },
// //     redButton: {
// //       backgroundColor: "#dc2626",
// //     },
// //     buttonText: {
// //       color: "white",
// //       fontWeight: "bold",
// //       textAlign: "center",
// //     },
// //   })

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native"

// export default function HomeScreen({ navigation }: any) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.badge}>CIRO AI</Text>

//       <Text style={styles.title}>
//         Crisis Response Mobile
//       </Text>

//       <Text style={styles.subtitle}>
//         Report incidents, receive alerts, and coordinate response.
//       </Text>

//       <TouchableOpacity
//         style={[styles.button, styles.redButton]}
//         onPress={() =>
//           navigation.navigate("Report Incident")
//         }
//       >
//         <Text style={styles.buttonText}>
//           Report Incident
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() =>
//           navigation.navigate("Incidents Alerts")
//         }
//       >
//         <Text style={styles.buttonText}>
//           Incidents Alerts
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() =>
//           navigation.navigate("Responder View")
//         }
//       >
//         <Text style={styles.buttonText}>
//           Responder View
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() =>
//           navigation.navigate("Crisis Map")
//         }
//       >
//         <Text style={styles.buttonText}>
//           Crisis Map
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Severity Analysis")}
//       >
//         <Text style={styles.buttonText}>Severity Analysis</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Stakeholder Center")}
//       >
//         <Text style={styles.buttonText}>Stakeholder Center</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate("Agent Traces")}
//       >
//         <Text style={styles.buttonText}>Agent Traces</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     justifyContent: "center",
//     backgroundColor: "#09090b",
//   },
//   badge: {
//     color: "#22d3ee",
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   title: {
//     color: "white",
//     fontSize: 34,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     color: "#a1a1aa",
//     marginTop: 10,
//     marginBottom: 30,
//   },
//   button: {
//     backgroundColor: "#7c3aed",
//     padding: 16,
//     borderRadius: 16,
//     marginBottom: 14,
//   },
//   redButton: {
//     backgroundColor: "#dc2626",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center",
//   },
// })

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native"

import { useTheme } from "../theme/ThemeContext"
import ThemeToggle from "../components/ThemeToggle"


export default function HomeScreen({ navigation }: any) {
  const { theme } = useTheme()
  const { width } = useWindowDimensions()

  const isTablet = width >= 768

  const menuItems = [
    ["Report Incident", "Report Incident", theme.danger],
    ["Incidents Alerts", "Incidents Alerts", theme.primary],
    ["Responder View", "Responder View", theme.primary],
    ["Crisis Map", "Crisis Map", theme.primary],
    ["Severity Analysis", "Severity Analysis", theme.primary],
    ["Stakeholder Center", "Stakeholder Center", theme.primary],
    ["Agent Traces", "Agent Traces", theme.primary],
    ["Emergency Impact", "Emergency Impact", theme.primary],
  ]

  return (
    <ScrollView
      style={{ backgroundColor: theme.background }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.topRow}>
        <View>
          <Text style={[styles.badge, { color: theme.primary }]}>
            CIRO AI
          </Text>

          <Text style={[styles.title, { color: theme.text }]}>
            Crisis Response Mobile
          </Text>

          <Text style={[styles.subtitle, { color: theme.muted }]}>
            Report incidents, receive alerts, track response teams, view crisis
            maps, and monitor AI agent decisions.
          </Text>
        </View>

        <ThemeToggle />
      </View>

      <View
        style={[
          styles.grid,
          {
            flexDirection: isTablet ? "row" : "column",
            flexWrap: isTablet ? "wrap" : "nowrap",
          },
        ]}
      >
        {menuItems.map(([label, route, color]) => (
          <TouchableOpacity
            key={route}
            style={[
              styles.button,
              {
                backgroundColor: color,
                width: isTablet ? "48%" : "100%",
              },
            ]}
            onPress={() => navigation.navigate(route)}
          >
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={[
          styles.infoCard,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
          },
        ]}
      >
        <Text style={[styles.infoTitle, { color: theme.text }]}>
          Mobile Command Companion
        </Text>

        <Text style={[styles.infoText, { color: theme.muted }]}>
          This app is linked with the CIRO web dashboard. Any citizen report is
          processed by the backend agents and appears live on both mobile and web.
        </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingBottom: 40,
  },
  topRow: {
    gap: 18,
    marginBottom: 24,
  },
  badge: {
    fontWeight: "900",
    marginBottom: 8,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    lineHeight: 40,
  },
  subtitle: {
    marginTop: 10,
    lineHeight: 22,
  },
  grid: {
    gap: 14,
  },
  button: {
    padding: 17,
    borderRadius: 18,
  },
  buttonText: {
    color: "white",
    fontWeight: "900",
    textAlign: "center",
  },
  infoCard: {
    marginTop: 24,
    padding: 18,
    borderRadius: 20,
    borderWidth: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: "900",
  },
  infoText: {
    marginTop: 8,
    lineHeight: 21,
  },
})
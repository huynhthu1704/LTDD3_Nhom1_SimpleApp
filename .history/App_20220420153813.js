// import React, { useCallback, useEffect, useState } from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Component } from "react/cjs/react.development";
//import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { FONTS } from "./app/constants/theme";
import MainContainer from "./app/screens/MainContainer";
import * as SplashScreen from "expo-splash-screen";



//   async loadFonts() {
//     await Font.loadAsync({
//       "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
//       "Poppins-BlackItalic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
//       "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
//       "Poppins-BoldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
//       "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
//       "Poppins-ExtraBoldItalic": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
//       "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
//       "Poppins-ExtraLightItalic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
//       "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
//       "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
//       "Poppins-MediumItalic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
//       "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
//       "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
//       "Poppins-SemiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
//     });
//     this.setState({ fontsLoaded: true });
//   }
//   async prepare() {
//     try {
//       await SplashScreen.preventAutoHideAsync();
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//     } catch (e) {
//       console.warn(e);
//     } finally {
//       setAppIsReady(true);
//     }
//   }

//   componentDidMount() {
//     this.loadFonts();
//     this.prepare();
//   }
//   componentDidUpdate() {}
//   render() {
//     return <MainContainer />;
//   }
// }

// export default App;

// // export default function App() {
// //   const [appIsReady, setAppIsReady] = useState(false);

// //   useEffect(() => {
// //     async function prepare() {
// //       try {
// //         // Keep the splash screen visible while we fetch resources
// //         await SplashScreen.preventAutoHideAsync();
// //         // Pre-load fonts, make any API calls you need to do here
// //         await Font.loadAsync(Entypo.font);
// //         // Artificially delay for two seconds to simulate a slow loading
// //         // experience. Please remove this if you copy and paste the code!
// //         await new Promise(resolve => setTimeout(resolve, 2000));
// //       } catch (e) {
// //         console.warn(e);
// //       } finally {
// //         // Tell the application to render
// //         setAppIsReady(true);
// //       }
// //     }

// //     prepare();
// //   }, []);

// //   const onLayoutRootView = useCallback(async () => {
// //     if (appIsReady) {
// //       // This tells the splash screen to hide immediately! If we call this after
// //       // `setAppIsReady`, then we may see a blank screen while the app is
// //       // loading its initial state and rendering its first pixels. So instead,
// //       // we hide the splash screen once we know the root view has already
// //       // performed layout.
// //       await SplashScreen.hideAsync();
// //     }
// //   }, [appIsReady]);

// //   if (!appIsReady) {
// //     return null;
// //   }

// //   return (
// //     <View
// //       style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
// //       onLayout={onLayoutRootView}>
// //       <Text>SplashScreen Demo! 👋</Text>
// //       <Entypo name="rocket" size={30} />
// //     </View>
// //   );
// // }
import { Text, View, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import React, { useEffect, useState, useCallback } from "react";

export default function App() {
  let [fontsLoaded, isFontsLoaded] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
      "Poppins-BlackItalic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
      "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "Poppins-BoldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
      "Poppins-ExtraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
      "Poppins-ExtraBoldItalic": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
      "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
      "Poppins-ExtraLightItalic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
      "Poppins-Italic": require("./assets/fonts/Poppins-Italic.ttf"),
      "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "Poppins-MediumItalic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
      "Poppins-SemiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
    });
    isFontsLoaded(true);
  }
  async function prepare() {
    try {
      // Keep the splash screen visible while we fetch resources
      await SplashScreen.preventAutoHideAsync();
      // Pre-load fonts, make any API calls you need to do here
      // Artificially delay for two seconds to simulate a slow loading
      // experience. Please remove this if you copy and paste the code!
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (e) {
      console.warn(e);
    } finally {
      // Tell the application to render
      setAppIsReady(true);
    }
  }
  useEffect(() => {
    loadFonts();
    prepare();
  }, []);
//   const onLayoutRootView = useCallback(async () => {
//     if (appIsReady) {
//       // This tells the splash screen to hide immediately! If we call this after
//       // `setAppIsReady`, then we may see a blank screen while the app is
//       // loading its initial state and rendering its first pixels. So instead,
//       // we hide the splash screen once we know the root view has already
//       // performed layout.
//       await SplashScreen.hideAsync();
//     }
//   }, [appIsReady]);

//   if (!fontsLoaded || !appIsReady) {
//     return <AppLoading />;
//   }

//   return (
//     <View onLayout={onLayOutRootView} style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text style={{ fontFamily: "Poppins-Black", fontSize: 40 }}>
//         Inter Black
//       </Text>
//       <Text style={{ fontSize: 40 }}>Platform Default</Text>
//     </View>
//   );
// }
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!fontsLoaded || !appIsReady) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView    
    style = {{flex : 1}}
      onLayout={onLayoutRootView}>
      <Text style = {{fontFamily : "Poppins-Regular"}}>SplashScreen Demo! 👋</Text>
    </SafeAreaView>
  );
}
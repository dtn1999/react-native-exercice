import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import DUMMY_PEOPLE_NEAR_BY from "../data/users.json";
import { ProfileCircle } from "../components/ProfileCircle";
import { useNavigation, useRoute } from "@react-navigation/core";
import { User } from "../types";
import { findUsersNearby } from "../utils/search";

interface Props {}

const usePeopleNearBy = (user: User) => {
  const [people, setPeople] = React.useState<User[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  React.useEffect(() => {
    // This is just a dummy function to simulate latency in fetching data from the server
    // we will replace this with an actual function that fetches data from the server
    setTimeout(async () => {
      const people = await findUsersNearby(user, DUMMY_PEOPLE_NEAR_BY);
      setPeople(people);
      setIsLoading(false);
    }, 2000);
  }, []);

  return [people, isLoading] as const;
};

const CommunityScreen: React.FC<Props> = React.memo(({}) => {
  const navigation = useNavigation<any>();
  const {
    params: { user },
  } = useRoute<any>();
  const [people, isLoading] = usePeopleNearBy(user);

  const handleProfilePress = React.useCallback((person: any) => {
    navigation.navigate("UserProfileScreen" as never, {
      person,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Leuten In Meine Umgebung</Text>
      </View>
      {/* <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.textInput}
          onChange={(event) => {
            setSearchInput(event.nativeEvent.text);
          }}
          value={searchInput}
          placeholder="Suche nach Interessen"
        />
        <FontAwesome
          name="filter"
          size={24}
          style={styles.icon}
          color="#25292e"
        />
      </View> */}
      <ScrollView
        style={styles.scrollViewContainer}
        contentContainerStyle={styles.scrollViewContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {isLoading ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator />
          </View>
        ) : people.length > 0 ? (
          people.map((person, index) => (
            <Pressable key={index} onPress={() => handleProfilePress(person)}>
              <ProfileCircle
                profilePicture={person.profilePicture}
                name={person.name}
              />
            </Pressable>
          ))
        ) : (
          <Text>
            Keine Leute In Deiner Umgebung mit den gleichen Interessen
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
});

export default CommunityScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { width: "100%", paddingHorizontal: 20 },
  title: { marginVertical: 20, fontSize: 18, fontWeight: "bold" },
  icon: { marginBottom: 8 },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  textInput: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#25292e",
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    marginRight: 8,
    backgroundColor: "#f2f2f2",
  },
  scrollViewContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    flexDirection: "column",
    paddingBottom: 100,
  },
  scrollViewContentContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  activityIndicatorContainer: {
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  ActivityIndicator,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { peopleNearBy as DUMMY_PEOPLE_NEAR_BY } from "../data/dummyUserNearBy";
import { ProfileCircle } from "../components/ProfileCircle";
import { useNavigation } from "@react-navigation/core";

interface Props {}

const usePeopleNearBy = (interests: string[] = []) => {
  const [people, setPeople] = React.useState<any[]>([]);
  const loadPeopleNearBy = React.useCallback((interest: string[]) => {
    if (interest.length === 0) return DUMMY_PEOPLE_NEAR_BY;
    return DUMMY_PEOPLE_NEAR_BY.filter((person) => {
      return person.interests.some((i) => interest.includes(i));
    });
  }, []);

  React.useEffect(() => {
    const people: any[] = loadPeopleNearBy(interests);
    setTimeout(() => {
      setPeople(people);
    }, 2000);
  }, []);

  return [people] as const;
};

const CommunityScreen: React.FC<Props> = React.memo(({}) => {
  const navigation = useNavigation<any>();
  const [searchInput, setSearchInput] = React.useState("");
  const [people] = usePeopleNearBy([]);

  const handleProfilePress = React.useCallback((person: any) => {
    navigation.navigate("UserProfileScreen" as never, {
      person,
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%" }}>
          <Text
            style={{ marginVertical: 20, fontSize: 18, fontWeight: "bold" }}
          >
            Leuten finden
          </Text>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", width: "100%" }}
        >
          <TextInput
            style={{
              width: "90%",
              borderWidth: 1,
              borderColor: "#25292e",
              borderRadius: 8,
              padding: 8,
              marginBottom: 8,
              marginRight: 8,
              backgroundColor: "#f2f2f2",
            }}
            onChange={(event) => {
              setSearchInput(event.nativeEvent.text);
            }}
            value={searchInput}
            placeholder="Suche nach Interessen"
          />
          <FontAwesome
            name="filter"
            size={24}
            style={{ marginBottom: 8 }}
            color="#25292e"
          />
        </View>
        {people.length === 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {people.map((person, index) => (
              <Pressable
                style={{}}
                key={index}
                onPress={() => handleProfilePress(person)}
              >
                <ProfileCircle
                  profilePicture={person.profilePicture}
                  name={person.name}
                />
              </Pressable>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
});

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    flexDirection: "column",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

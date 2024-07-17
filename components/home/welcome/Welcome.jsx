import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";

import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";
const Welcome = () => {
  const router = useRouter();
  const [input, setinput] = useState("");
  const [activeJobType, setactiveJobType] = useState("Full-Time");

  const jobtypes = ["Full-Time", "Part-Time", "Contractor"];
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>hello Abhinav</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Jobs</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onchange={() => {}}
            placeholder="What are u Looking For ?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onpress={() => {}}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={jobtypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onpress={() => {
                setactiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;

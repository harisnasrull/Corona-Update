import React from "react";
import filter from "lodash.filter";
import { connect } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Login, Logout} from "./User";

const DEVICE = Dimensions.get("window");

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      globalData: [],
      countriesData: [],
      searchData: [],
      seacrhText: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.covid19api.com/summary");
      const responseJSON = await response.json();
      this.setState({
        globalData: responseJSON.Global,
        countriesData: responseJSON.Countries,
      });
    } catch (error) {
      console.log(error);
    }
  }

  logout() {
    const { dispatch } = this.props
    dispatch(Logout.logout())
    this.props.navigation.navigate("Login");
  }

  moveProfile() {
    this.props.navigation.navigate("About");
  }

  moveDetail(val) {
    this.props.navigation.navigate("Detail", {
      name: val.Country,
      confirmed: val.TotalConfirmed,
      death: val.TotalDeaths,
      recover: val.TotalRecovered,
      date: val.Date.substr(0, 10),
    });
  }

  handleSearch = (text) => {
    const formattedQuery = text;
    const data = filter(this.state.countriesData, (countrySearch) => {
      return this.contains(countrySearch, formattedQuery);
    });
    this.setState({ countriesData: data, seacrhText: text });
  };

  contains = (countrySearch, query) => {
    const { Country } = countrySearch;
    if (Country.includes(query)) {
      return true;
    }
    return false;
  };

  render() {
    const { userName } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.itemNav}
            onPress={() => this.logout()}
          >
            <Icon name="logout" size={30} color="#FF0000" />
            <Text>Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.itemNav}
            onPress={() => this.moveProfile()}
          >
            <Text>Our Profile</Text>
            <Icon name="account" size={30} color="#19A3F0" />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Text style={styles.text}>
            Hello, {userName}
          </Text>

          <View>
            <TextInput
              style={styles.search}
              placeholder="Search Country"
              autoCapitalize="sentences"
              onChangeText={this.handleSearch}
              clearButtonMode="always"
            />
          </View>

          <ScrollView>
            <View style={styles.world}>
              <Text style={styles.worldText}>World Case</Text>
              <View style={styles.itemWorldConfirmed}>
                <Text style={styles.text}>Confirmed</Text>
                <Text style={styles.text}>
                  {this.state.globalData.TotalConfirmed}
                </Text>
              </View>
              <View style={styles.itemWorldDeaths}>
                <Text style={styles.text}>Deaths</Text>
                <Text style={styles.text}>
                  {this.state.globalData.TotalDeaths}
                </Text>
              </View>
              <View style={styles.itemWorldRecovered}>
                <Text style={styles.text}>Recovered</Text>
                <Text style={styles.text}>
                  {this.state.globalData.TotalRecovered}
                </Text>
              </View>
            </View>

            <FlatList
              style={{height : DEVICE.height * 0.4}}
              data={this.state.countriesData}
              renderItem={(country) => (
                <TouchableOpacity onPress={() => this.moveDetail(country.item)}>
                  <View style={styles.itemCountry}>
                    <Text style={styles.text}>{country.item.Country}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#97FFE0",
  },
  navBar: {
    height: 60,
    width: DEVICE.width - 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 15,
    marginTop: 10,
  },
  itemNav: {
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  world: {
    borderWidth: 1,
    alignItems: "center",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#19A3F0",
  },
  worldText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  itemWorldConfirmed: {
    padding: 20,
    margin: 10,
    width: 240,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "#C4C4C4",
    borderColor: "white",
  },
  itemWorldDeaths: {
    padding: 20,
    margin: 10,
    width: 240,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "#FF5656",
    borderColor: "white",
  },
  itemWorldRecovered: {
    padding: 20,
    margin: 10,
    width: 240,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "#43FF33",
    borderColor: "white",
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    backgroundColor: "white",
  },
  itemCountry: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
});

const mapStateToProps = (state) => ({
  userName: state.userName,
})

export default connect(mapStateToProps)(HomePage)
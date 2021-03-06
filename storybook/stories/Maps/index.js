import React from "react"
import PropTypes from "prop-types"
import { TouchableHighlight, StyleSheet } from "react-native"
import MapView from "react-native-maps"

export default function Maps(props) {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  )
}

Maps.defaultProps = {
  children: null,
  onPress: () => {}
}

Maps.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})

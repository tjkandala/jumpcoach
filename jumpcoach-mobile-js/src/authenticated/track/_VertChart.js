import React, { useRef, useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated
} from "react-native";
import { connect } from "react-redux";
import Svg, { Path, LinearGradient, Defs, Stop } from "react-native-svg";
import * as path from "svg-path-properties";

import * as scale from "d3-scale";
import * as shape from "d3-shape";
import * as format from "d3-format";
import * as axis from "d3-axis";

const d3 = {
  scale,
  shape,
  format,
  axis
};

import { scaleTime, scaleLinear, scaleQuantile } from "d3-scale";

const height = 200;
const { width } = Dimensions.get("window");
const verticalPadding = 5;
const cursorRadius = 10;
const labelWidth = 100;

// helper functions for domain and range

const VertChartContainer = ({ data }) => {
  const [line, setLine] = useState(null);
  const [lineLength, setLineLength] = useState(null);
  const [domainXTuple, setDomainXTuple] = useState(null);
  const [domainYTuple, setDomainYTuple] = useState(null);
  const [rangeScaleLabel, setRangeScaleLabel] = useState(null);

  useEffect(() => {
    // execute domain and range functions here
    const domainXTuple = [
      Math.min(...data.map(datum => datum.x)),
      Math.max(...data.map(datum => datum.x))
    ];

    const domainYTuple = [
      Math.min(...data.map(datum => datum.y)),
      Math.max(...data.map(datum => datum.y))
    ];

    const rangeScaleLabelUnsorted = data.map(datum => datum.y);
    const rangeScaleLabel = rangeScaleLabelUnsorted
      .filter((item, index) => rangeScaleLabelUnsorted.indexOf(item) === index)
      .sort((a, b) => a - b);

    const scaleX = scaleTime()
      .domain(domainXTuple)
      .range([0, width]);
    const scaleY = scaleLinear()
      .domain(domainYTuple)
      .range([height - verticalPadding, verticalPadding]);
    const scaleLabel = scaleQuantile()
      .domain(domainYTuple)
      .range(rangeScaleLabel);

    const line = d3.shape
      .line()
      .x(d => scaleX(d.x))
      .y(d => scaleY(d.y))
      .curve(d3.shape.curveBasis)(data);

    const properties = path.svgPathProperties(line);
    const lineLength = properties.getTotalLength();

    setLine(line);
    setLineLength(lineLength);
    setDomainXTuple(domainXTuple);
    setDomainYTuple(domainYTuple);
    setRangeScaleLabel(rangeScaleLabel);
  }, [data]);

  return (
    <>
      {line && lineLength ? (
        <VertChart
          line={line}
          lineLength={lineLength}
          domainXTuple={domainXTuple}
          domainYTuple={domainYTuple}
          rangeScaleLabel={rangeScaleLabel}
        />
      ) : (
        <></>
      )}
    </>
  );
};

const VertChart = ({
  line,
  lineLength,
  domainXTuple,
  domainYTuple,
  rangeScaleLabel
}) => {
  const [x, setX] = useState(new Animated.Value(0));
  const cursor = useRef(null);

  // continuous to discrete values
  const [scaledLabel, setScaledLabel] = useState(0);

  useEffect(() => {
    x.addListener(({ value }) => {
      const { x, y } = path
        .svgPathProperties(line)
        .getPointAtLength(lineLength - value);
      cursor.current.setNativeProps({
        top: y - cursorRadius,
        left: x - cursorRadius
      });

      const scaleLabel = scaleQuantile()
        .domain(domainYTuple)
        .range(rangeScaleLabel);
      const scaleY = scaleLinear()
        .domain(domainYTuple)
        .range([height - verticalPadding, verticalPadding]);

      setScaledLabel(scaleLabel(scaleY.invert(y)));
    });
  }, []);

  // set cursor to 0
  useEffect(() => {
    const { x, y } = path
      .svgPathProperties(line)
      .getPointAtLength(lineLength - 0);
    cursor.current.setNativeProps({
      top: y - cursorRadius,
      left: x - cursorRadius
    });

    const scaleLabel = scaleQuantile()
      .domain(domainYTuple)
      .range(rangeScaleLabel);
    const scaleY = scaleLinear()
      .domain(domainYTuple)
      .range([height - verticalPadding, verticalPadding]);

    setScaledLabel(scaleLabel(scaleY.invert(y)));
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.titleText}>{scaledLabel} inches</Text>

      <View style={styles.container}>
        <Svg {...{ width, height }}>
          <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
              <Stop stopColor="#CDE3F8" offset="0%" />
              <Stop stopColor="#303336" offset="50%" />
              <Stop stopColor="#000000" offset="100%" />
            </LinearGradient>
          </Defs>
          <Path d={line} fill="transparent" stroke="#CDE3F8" strokeWidth={5} />
          <Path
            d={`${line} L ${width} ${height} L 0 ${height}`}
            fill="url(#gradient)"
            opacity="66%"
          />
          <View ref={cursor} style={styles.cursor} />
        </Svg>

        <Animated.ScrollView
          style={StyleSheet.absoluteFill}
          contentContainerStyle={{ width: lineLength * 2 }}
          showsHorizontalScrollIndicator={true}
          scrollEventThrottle={16}
          bounces={false}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x }
                }
              }
            ],
            { useNativeDriver: true }
          )}
          horizontal
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => ({
  data: state.vertHistory
});

const ConnectedVertChartContainer = connect(
  mapStateToProps,
  null
)(VertChartContainer);

export default ConnectedVertChartContainer;

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container: {
    marginTop: 60,
    height,
    width
  },
  cursor: {
    width: cursorRadius * 2,
    height: cursorRadius * 2,
    borderRadius: cursorRadius,
    borderColor: "#367be2",
    borderWidth: 3,
    backgroundColor: "white"
  },
  label: {
    position: "absolute",
    top: -45,
    left: 0,
    backgroundColor: "darkgrey",
    width: labelWidth
  },
  titleText: {
    marginTop: 16,
    fontSize: 48,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
  }
});

const formatDate = (date = new Date()) => {
  const dateObject = new Date(date);
  const formattedDate = `${dateObject.getMonth() +
    1}-${dateObject.getDate()}-${dateObject.getFullYear()}`;

  return formattedDate;
};

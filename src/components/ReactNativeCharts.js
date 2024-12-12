import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Svg, { Text as SvgText } from 'react-native-svg';

const attendanceData = [
  { _id: '1', date: '2024-11-01T08:00:00Z', status: 'present' },
  { _id: '2', date: '2024-11-02T08:00:00Z', status: 'absent' },
  { _id: '3', date: '2024-11-03T08:00:00Z', status: 'present' },
  { _id: '4', date: '2024-11-04T08:00:00Z', status: 'present' },
  { _id: '5', date: '2024-11-05T08:00:00Z', status: 'absent' },
  { _id: '6', date: '2024-11-06T08:00:00Z', status: 'present' },
  { _id: '7', date: '2024-11-07T08:00:00Z', status: 'absent' },
  { _id: '8', date: '2024-11-08T08:00:00Z', status: 'present' },
  { _id: '9', date: '2024-11-09T08:00:00Z', status: 'present' },
  { _id: '10', date: '2024-11-10T08:00:00Z', status: 'absent' },
];

const calculateAttendancePercentages = (data) => {
  const totalDays = data.length;
  if (totalDays === 0) return { presentPercentage: 0, absentPercentage: 0 };

  const presentCount = data.filter(record => record.status === 'present').length;
  const absentCount = totalDays - presentCount;

  return {
    presentPercentage: ((presentCount / totalDays) * 100).toFixed(2),
    absentPercentage: ((absentCount / totalDays) * 100).toFixed(2),
    presentCount,
    absentCount,
    totalDays
  };
};

const ReactNativeCharts = () => {
  const { presentPercentage, absentPercentage, presentCount, absentCount, totalDays } = calculateAttendancePercentages(attendanceData);

  const pieChartData = [
    {
      name: `Present (${presentPercentage}%)`,
      population: Number(presentPercentage),
      color: '#28a745', // Green for Present
      legendFontColor: '#333',
      legendFontSize: 15,
    },
    {
      name: `Absent (${absentPercentage}%)`,
      population: Number(absentPercentage),
      color: '#dc3545', // Red for Absent
      legendFontColor: '#333',
      legendFontSize: 15,
    },
  ];

  const screenWidth = Dimensions.get('window').width - 50;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendance Overview</Text>
      
      <View style={styles.chartContainer}>
        <PieChart
          data={pieChartData}
          width={screenWidth}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            color: () => `rgba(0, 0, 0, 0.5)`,
            labelColor: () => `rgba(0, 0, 0, 0.7)`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          style={styles.chartStyle}
        />
        <Svg height="220" width={screenWidth} style={styles.svgOverlay}>
          {/* Centered text for Present */}
          <SvgText
            x="25%"
            y="50%"
            fill="#28a745"
            fontSize="18"
            fontWeight="bold"
            textAnchor="middle"
          >
            {presentPercentage}%
          </SvgText>
          {/* Centered text for Absent */}
          <SvgText
            x="75%"
            y="50%"
            fill="#dc3545"
            fontSize="18"
            fontWeight="bold"
            textAnchor="middle"
          >
            {absentPercentage}%
          </SvgText>
        </Svg>
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total Days:</Text>
          <Text style={styles.summaryValue}>{totalDays}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryLabel, { color: '#28a745' }]}>Days Present:</Text>
          <Text style={styles.summaryValue}>{presentCount}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={[styles.summaryLabel, { color: '#dc3545' }]}>Days Absent:</Text>
          <Text style={styles.summaryValue}>{absentCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  chartContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  chartStyle: {
    borderRadius: 16,
  },
  svgOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  summary: {
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default ReactNativeCharts;

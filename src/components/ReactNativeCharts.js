import {View, Text, Dimensions, ScrollView} from 'react-native';
import React from 'react';
import {PieChart} from 'react-native-chart-kit';
import Svg, {Text as SvgText} from 'react-native-svg';
const Half_gray  = 'rgba(0,0,0,0.6)'
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const calculateAttendances = data => {
  const todayMonth = new Date();
  const getLastDigitMonth = new Date(
    todayMonth.getFullYear(),
    todayMonth.getMonth() + 1,
    0,
  ).getDate();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentMonth = monthNames[todayMonth.getMonth()];

  const totalDays = getLastDigitMonth;
  if (totalDays === 0) return {presentPercentage: 0, absentPercentage: 0};
  const presentCount = data?.filter(
    record => record?.status === 'present',
  ).length;
  const absentCount = data?.filter(
    record => record?.status === 'absent',
  ).length;

  return {
    presentPercentage: ((presentCount / totalDays) * 100).toFixed(0),
    absentPercentage: ((absentCount / totalDays) * 100).toFixed(0),
    presentCount,
    absentCount,
    totalDays,
    currentMonth,
  };
};

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



const ReactNativeCharts = () => {
  // const {data: attendanceData, isLoading: attendanceLoading} =
  //   useStudentAttendanceQuery();
  const {
    presentPercentage,
    absentPercentage,
    presentCount,
    absentCount,
    totalDays,
    currentMonth,
  } = calculateAttendances(attendanceData || []);
  console.log(absentCount);

  // if (attendanceLoading) {
  //   return <Loader />;
  // }

  const pieChartData = [
    {
      name: `Present`,
      population: Number(presentCount),
      color: '#0B8917',
      legendFontColor: '#333',
      legendFontSize: responsiveFontSize(1.2),
    },
    {
      name: `Absent`,
      population: Number(absentCount),
      color: '#C81D02',
      legendFontColor: '#333',
      legendFontSize: responsiveFontSize(1.2),
    },
  ];
  const screenWidth = responsiveWidth(90);

  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          marginVertical: responsiveHeight(2),
          padding: responsiveWidth(5),
          borderRadius: responsiveWidth(4),
          backgroundColor: '#f9f9f9',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 5,
          width: responsiveWidth(90),
          alignSelf: 'center',
        }}>
        <Text
          style={{
            fontSize: responsiveFontSize(2),
            color: Half_gray,
            fontWeight: 'bold',
            marginBottom: responsiveHeight(1.5),
            textAlign: 'center',
          }}>
          Attendance {currentMonth}
        </Text>

        <View style={{marginBottom: responsiveHeight(2)}}>
          <PieChart
            data={pieChartData}
            width={screenWidth}
            hasLegend={false}
            height={responsiveHeight(30)}
            chartConfig={{
              backgroundColor: 'red',
              color: () => `rgba(0, 0, 0, 0.5)`,
              labelColor: () => `rgba(0, 0, 0, 0.7)`,
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
            style={{
              borderRadius: responsiveWidth(4),
              alignSelf: 'center',
              width: responsiveWidth(50),
            }}
          />
          <Svg
            height={responsiveHeight(30)}
            width={screenWidth}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}>
            {/* Centered text for Present */}
            <SvgText
              x="40%"
              y="60%"
              fill="#ffff"
              fontSize={responsiveFontSize(1.75)}
              fontWeight="bold"
              textAnchor="middle">
              {presentPercentage}%
            </SvgText>
            {/* Centered text for Absent */}
            <SvgText
              x="13%"
              y="40%"
              fill="#ffff"
              fontSize={responsiveFontSize(1.75)}
              fontWeight="bold"
              textAnchor="middle">
              {absentPercentage}%
            </SvgText>
          </Svg>
          <View style={{flexDirection: 'column', gap: responsiveHeight(0.5)}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: responsiveWidth(1),
              }}>
              <View
                style={{
                  borderRadius: responsiveWidth(2),
                  backgroundColor: 'red',
                  height: responsiveHeight(1),
                  width: responsiveWidth(1.5),
                }}
              />
              <Text style={{fontSize: responsiveFontSize(0.9)}}>Absent</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: responsiveWidth(1),
              }}>
              <View
                style={{
                  borderRadius: responsiveWidth(2),
                  backgroundColor: 'green',
                  height: responsiveHeight(1),
                  width: responsiveWidth(1.5),
                }}
              />
              <Text style={{fontSize: responsiveFontSize(0.9)}}>Present</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Total days, present count, absent count sections */}
      {[
        {
          label: 'Total Days',
          count: totalDays,
          color: Half_gray,
        },
        {
          label: 'Total Present',
          count: presentCount,
          color: '#0B8917',
        },
        {
          label: 'Total Absent',
          count: absentCount,
          color: '#C81D02',
        },
      ].map(({label, count, color}, index) => (
        <View
          key={index}
          style={{
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginVertical: responsiveHeight(0.7),
            paddingVertical: responsiveHeight(1),
            paddingHorizontal: responsiveWidth(2),
            borderRadius: responsiveWidth(4),
            backgroundColor: '#f9f9f9',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 4,
            width: responsiveWidth(90),
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: responsiveFontSize(1.6),
              margin: responsiveWidth(1),
              fontWeight: '700',
              color,
            }}>
            {label} :
          </Text>
          <Text
            style={{
              fontSize: responsiveFontSize(1.6),
              margin: responsiveWidth(1),
              fontWeight: '700',
              color,
            }}>
            {count} {count > 1 ? 'days' : 'day'}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};



export default ReactNativeCharts;

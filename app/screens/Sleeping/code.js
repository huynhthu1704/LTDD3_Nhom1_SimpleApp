  {/* Audio seekbar */}
  <View style={{ flex: 1, justifyContent: "center" }}>
  <Slider
    style={{ width: "100%", height: 20 }}
    value={calculateSeekbar()}
    minimumValue={0}
    maximumValue={1}
    thumbTintColor="red"
    minimumTrackTintColor="red"
    onValueChange={(value) => { }}
    onSlidingStart={async () => {
      console.log("isPlaying: " + isPlaying);
      if (!isPlaying) {
        return;
      }
      try {
      
      } catch (error) {
        console.log(error.message);
      }
    }}
    onSlidingComplete={async (value) => {
      if (sound === null) {
        return null;
      }
      try {
        const status = await playBackObj.setPositionAsync(
          value * playBackDuration
        );
        setSound(status);
        // setPlayBackPosition(value * playBackDuration);

        if (isPlaying) {
          await playBackObj.playAsync();
        }

        if (value * playBackDuration >= playBackDuration) {
          setPlay(false);
          return;
        }
      } catch (error) {
        console.log(error);
      }
    }}
  />
  {/* End slider */}

  {/* Timer count section */}
  <View
    style={{
      paddingHorizontal: SIZES.padding / 2,
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    {/* <Text style={{ color: COLORS.white }}>
      {playHour > 0 ? playHour + " : " : ""}
      {playMin >= 10 ? playMin : "0" + playMin} :
      {playSec >= 10 ? playSec : "0" + playSec}
    </Text>
    <Text style={{ color: COLORS.white }}>
      {hour > 0 ? hour + " : " : ""}
      {minute >= 10 ? minute : "0" + minute} :
      {sec >= 10 ? sec : "0" + sec}
    </Text> */}
  </View>
  {/* End timer count section */}
</View>
{/* End Audio seekbar */}
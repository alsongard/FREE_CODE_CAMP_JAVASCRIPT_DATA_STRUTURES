function hasPassingGrade(score) {
    let result = getGrade(score);
    // console.log(result);
    if (result !== "F")
    {
      return true;
    }
    else{
      return false;
    }
}
function totalFine(fare) {
    const fine = fare + fare*0.2 +30;
    if(typeof(fare)!=="number" || fare<=0){
        return "Invalid";
    }
    return fine;
}



function superbowlWin(record) {
    const win = record.find((footballObject) => footballObject.result === "W");
    
    if (win) {
        return win.year 
    }
    else  {
        return undefined
    }
}


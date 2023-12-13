db2scale 80 becomes whitenoisedb
 let whitenoisedb = 80; 

 // Add a function to update whitenoisedb
 export function setWhiteNoiseDb(newDb) {
     whitenoisedb = newDb;
 }
 Export whitenoisedb so it can be used in TrialQ tguess1 and tguess 2

tguess1 and tguess2 in TrialQ = (whitenoisedb-25)

TrialV is a copy of TrialP; import this in Route.js and add <Route path="/Instructions" exact component={Instructions} /> before TrialP
Changed "Welcome.js" to redirect to "VolumeCalibrationInstructions.js"










#NOTES ON HOW STUFF WORKS
TrialP imports Trial.js at the top

Trial.js imports playWhiteNoise and then calls it in startTrial function where playwhitenoise takes arguments " playWhiteNoise(this.audioContext);"

Instructions.js gives instructions and when they press q it moves them onto trialP

In TrialP, trialCompleteRenderer counts how many trials are correct and directs people to "OnceMore" which explains they did poorly and then redirects them back to TrialP via "render() { if(this.state.continue === true){return <Redirect to="/Trial_P" />}"

 if the 'Q' key (keycode 81) is pressed, it sets a state variable continue to true, which triggers a redirect to the next part of the task.

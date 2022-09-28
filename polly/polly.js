//providing access key and secret access key to polly
AWS.config.accessKeyId = '';
AWS.config.secretAccessKey = '';
AWS.config.region = '';

//creating an instance of polly
var polly = new AWS.Polly();
//stores the incoming text 
var text = ""
//to store the url and refer to it later in the download part of the code
var url_global = ""
//when the play button is clicked, polly is used to sythesize speech from given input text

document.querySelector("#play").addEventListener("click", () => {
    // storing incoming text 
    text = document.querySelector("#input").value;
    //defining parameters for speech synthesis by polly
    var params = {

        OutputFormat: "mp3", 
        Text: text , 
        TextType: "text", 
        VoiceId: "Joanna" };
        
    // synthesis function
    polly.synthesizeSpeech (params, function(err, data) {
    
        //if error arises, print the error 
        if (err) {
        console.log(err, err.stack);
    
    }
    // else continue to construct audio file 
        else {
        
        //creating a Uint8Array to store audio stream
        var uInt8Array = new Uint8Array(data.AudioStream); 
        //to represent in binary form
        var arrayBuffer = uInt8Array.buffer; 
        //creating a new blob of type audio from buffer array 
        var blob = new Blob([arrayBuffer], {type : 'audio/mpeg'});
        //linking to audio section of html file ??
        var audio = $('audio'); 
        //creating url for blob
        var url= URL.createObjectURL(blob);
        audio[0].src = url;
        //playing audio
        audio[0].play();
        url_global = url;
        
    }
    
    })
})

//once the audio plays, you have the option of downloading it by clicking on the download button
        document.querySelector("#download").addEventListener("click", () => {
            
            //creating new element to store audio in
            const a = document.createElement('a');
            //to point to the url
            a.href = url_global
            //for naming the incoming audio file
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date+' '+time;
            a.download = dateTime.toString() + '.mp3'
            document.body.appendChild(a);
            // to download when button is clicked
            a.click();
            //since the user of this url is over, we revoke it 
            window.URL.revokeObjectURL(url_global);
            //message to display when the file has finished downloading
            alert('your file has downloaded!'); 
            
        })






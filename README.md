# polly
This website uses HTML and JS to take an input text from the user and convert it into a downloadable mp3 audio file using AWS Polly. Bootstrap  is used for styling. 

access website at: https://tts-ict-polly.netlify.app

#### Versions used:
###### Bootstrap: v5.0.0-beta1
###### jQuery: v3.5.1
###### AWS SDK for JavaScript: v2.132

##### 'Play': 
###### -used to play the audio file. 
###### -it is used to synthesize speech using synthesizeSpeech 
###### -parameters required include output format, text to convert, voice and text type.

##### 'Download':
###### -used to download the file
###### -creates an element, assigns url to it and deletes it after downloading
###### -involves giving unique names to each downloaded file

#### File descriptions:
###### index.html - to redirect during deployment
###### polly/index.html - to build the actual user interface of the website
###### polly/polly.js - javascript code for speech sythesis using AWS polly 

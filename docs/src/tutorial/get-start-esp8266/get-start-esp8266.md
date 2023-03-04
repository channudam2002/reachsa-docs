# **Get Start ESP8266 With Arduino IDE**

To use the ESP8266 with Arduino IDE, you need to follow these steps:

1. Install the Arduino IDE: If you haven't already installed it, download and install the latest version of the Arduino IDE from the official website (<https://www.arduino.cc/en/software>).
1. Add the ESP8266 Board to Arduino IDE: Go to File > Preferences in the Arduino IDE and enter the following URL in the "Additional Boards Manager URLs" field: "<http://arduino.esp8266.com/stable/package_esp8266com_index.json>". Click "OK" to close the Preferences window.
1. Install the ESP8266 Board: Go to Tools > Board > Boards Manager in the Arduino IDE, search for "esp8266" and install the latest version of the ESP8266 board package.
1. Select the ESP8266 Board: Go to Tools > Board in the Arduino IDE and select the appropriate ESP8266 board that you are using (e.g., NodeMCU, ESP-01, etc.).
1. Select the Serial Port: Go to Tools > Port in the Arduino IDE and select the serial port that your ESP8266 is connected to.
1. Write your Code: Write your Arduino code in the Arduino IDE. Note that the syntax is the same as the regular Arduino code, but you will need to use the specific libraries for the ESP8266.
1. Upload your Code: Click on the Upload button in the Arduino IDE to upload your code to the ESP8266.
1. Open the Serial Monitor: Go to Tools > Serial Monitor in the Arduino IDE to open the Serial Monitor and view the output of your ESP8266.

That's it! You should now be able to use the ESP8266 with Arduino IDE.

**LED Blinking** 

To test LED blinking on the ESP8266, you need to follow these steps:

1. Connect an LED to your ESP8266: Connect the positive leg of the LED to a digital pin (e.g., pin D0) on your ESP8266 and the negative leg of the LED to a resistor, then connect the other end of the resistor to the ground pin (GND) on your ESP8266.
1. Open the Arduino IDE: Open the Arduino IDE and create a new sketch.
1. Include the necessary libraries: Include the "ESP8266WiFi.h" and "ESP8266WebServer.h" libraries at the top of your sketch.
1. Define the LED pin: Define the LED pin as an output pin in your setup() function by adding the following code:

pinMode(D0, OUTPUT);

5. Blink the LED: In your loop() function, add the following code to blink the LED:
```
digitalWrite(D0, HIGH);

delay(1000);

digitalWrite(D0, LOW);

delay(1000);
```

This code will turn on the LED for one second, then turn it off for one second, and repeat.

6. Upload the code: Connect your ESP8266 to your computer and select the correct board and port in the Arduino IDE. Then, click on the Upload button to upload the code to your ESP8266.
6. Verify the LED is blinking: Once the upload is complete, you should see the LED connected to the D0 pin blinking on and off every second.

That's it! You have successfully tested LED blinking on the ESP8266 using the Arduino IDE.

**Station Mode on ESP8266**

ESP8266 is a popular WiFi module that can be used in station mode to connect to an existing WiFi network. Here are the steps to use ESP8266 on station mode:

1. Connect the ESP8266 module to your microcontroller or development board. Make sure that the power and ground pins are connected correctly.
1. Install the ESP8266 library in your Arduino IDE. You can download it from the official Arduino website or from GitHub.
1. In your Arduino code, include the ESP8266WiFi.h library.
1. Initialize the WiFi module by calling the WiFi.begin() function and passing in the SSID and password of the network you want to connect to.
1. Call the WiFi.status() function to check if the module is connected to the network. If the status is WL\_CONNECTED, the module has successfully connected to the network.
1. Once connected, you can use the WiFi.localIP() function to get the local IP address assigned to the ESP8266 module by the network.

Here is a sample code that demonstrates how to use ESP8266 on station mode:

```
#include <ESP8266WiFi.h>

const char\* ssid = "your\_SSID";

const char\* password = "your\_PASSWORD";

void setup() {

    Serial.begin(9600);

    delay(1000);

    // Connect to WiFi network

    WiFi.begin(ssid, password);

    Serial.println("Connecting to WiFi...");

    while (WiFi.status() != WL\_CONNECTED) {

        delay(1000);

        Serial.println("Connecting to WiFi...");

    }

    Serial.println("Connected to WiFi network");

    Serial.print("Local IP address: ");

    Serial.println(WiFi.localIP());

}

void loop() {

// your code goes here

}

```



This code connects the ESP8266 module to the WiFi network with the specified SSID and password. It waits until the module is connected to the network and then prints the local IP address to the serial monitor. You can add your own code inside the loop() function to control the ESP8266 module.

**Access Point Mode**

ESP8266 can also be used in access point mode to create its own WiFi network. Here are the steps to use ESP8266 on access point mode:

1. Connect the ESP8266 module to your microcontroller or development board. Make sure that the power and ground pins are connected correctly.
1. Install the ESP8266 library in your Arduino IDE. You can download it from the official Arduino website or from GitHub.
1. In your Arduino code, include the ESP8266WiFi.h and ESP8266WebServer.h libraries.
1. Initialize the WiFi module by calling the WiFi.mode() function and passing in the WIFI\_AP constant to set the module in access point mode.
1. Call the WiFi.softAP() function to create the WiFi network. Pass in the SSID and password of the network you want to create.
1. Once the network is created, you can use the ESP8266WebServer library to create a web server and handle incoming requests.

Here is a sample code that demonstrates how to use ESP8266 on access point mode:

```
#include <ESP8266WiFi.h>

#include <ESP8266WebServer.h>

const char\* ssid = "your\_SSID";

const char\* password = "your\_PASSWORD";

ESP8266WebServer server(80);

void handleRoot() {

    String html = "<html><body><h1>Hello, world!</h1></body></html>";

    server.send(200, "text/html", html);

}

void setup() {

    Serial.begin(9600);

    delay(1000);

    // Set WiFi mode to access point

    WiFi.mode(WIFI\_AP);

    // Create WiFi network

    WiFi.softAP(ssid, password);

    Serial.println("Access point started");

    Serial.print("SSID: ");

    Serial.println(ssid);

    Serial.print("IP address: ");

    Serial.println(WiFi.softAPIP());

    // Start web server

    server.on("/", handleRoot);

    server.begin();

    Serial.println("Web server started");

}

void loop() {

    server.handleClient();

}
```


This code sets the ESP8266 module in access point mode and creates a WiFi network with the specified SSID and password. It also creates a web server and handles incoming requests. When a client connects to the network and sends a request to the server's IP address, the server responds with an HTML page that says "Hello, world!". You can customize the handleRoot() function to serve your own web pages or perform other actions.

**Create Button Control LED**

To create a button on a web page that replaces the "Hello, world!" text with a message when clicked, you can use HTML, CSS, and JavaScript. Here's an example code snippet that you can use:

```
<!DOCTYPE html>

<html>

<head>

    <title>Button Example</title>

    <style>

    #message {

    font-size: 24px;

    margin-top: 20px;

    }

    </style>

</head>

<body>

    <button id="button">Click me!</button>

    <p id="message">Hello, world!</p>

    <script>

    document.getElementById("button").addEventListener("click", function() {

    document.getElementById("message").innerHTML = "You clicked the button!";

    });

    </script>

</body>

</html>
```

In this code, we've created a button element with an ID of "button" and a paragraph element with an ID of "message". We've also defined some CSS styles to apply to the "message" element.

In the JavaScript code, we're using the addEventListener method to listen for a "click" event on the "button" element. When the button is clicked, we're using the innerHTML property to replace the text inside the "message" element with a new message.

You can modify the code to display any message you want when the button is clicked. You can also add more CSS styles to customize the look of the button and message.

To create a button on ESP8266 that can be controlled by a web app on a phone, you can follow these general steps:

1. Connect the ESP8266 to your local Wi-Fi network.
1. Create a web server on the ESP8266 using the Arduino IDE and ESP8266 library.
1. Define a URL endpoint on the ESP8266 web server that will receive requests from the web app.
1. Create a web app using HTML, CSS, and JavaScript that sends HTTP requests to the ESP8266 web server when the button is pressed.
1. Send an HTTP request from the web app to the ESP8266 web server when the button is pressed, using the URL endpoint defined in step 3.
1. Modify the ESP8266 code to listen for requests to the URL endpoint and toggle a GPIO pin on the ESP8266 board when a request is received.

Here is an example code snippet that you can use to get started:

```
#include <WiFi.h>

#include <WebServer.h>

const char\* ssid = "Zeanglee";

const char\* password = "SouSeangly";

WebServer server(80);

void handleRoot() {

`  `server.send(200, "text/html", "<!DOCTYPE html><html><head><title>Button Example</title><style>#message{font-size:24px;margin-top:20px;}</style></head><body><button id='button'>Click me!</button><p id='message'>Hello, world!</p><script>document.getElementById('button').addEventListener('click',function(){document.getElementById('message').innerHTML='You clicked the button!';});</script></body></html>");

}

void setup() {

`  `pinMode(LED\_BUILTIN, OUTPUT);

`  `Serial.begin(9600);

`  `WiFi.begin(ssid, password);

`  `while (WiFi.status() != WL\_CONNECTED) {

`    `delay(1000);

`    `Serial.println("Connecting to WiFi...");

`  `}

`  `Serial.println("WiFi connected");

`  `Serial.println("IP address: ");

`  `Serial.println(WiFi.localIP());

`  `server.on("/", handleRoot);

`  `server.begin();

}

void loop() {

`  `server.handleClient();

}
```

This code sets up a web server on port 80 and listens for requests to the URLs "/button/on" and "/button/off". When a request is received, it toggles the state of the D1 GPIO pin and sends a response back to the client.

In your web app, you can create a button that sends an HTTP GET request to either "/button/on" or "/button/off", depending on whether you want to turn the button on or off. You can use jQuery or a similar library to make the HTTP request and handle the response.



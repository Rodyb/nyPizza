nightwatch_config = {
    "src_folders" : ["tests"],
    "output_folder" : "reports",
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : "page_objects",
    "globals_path" : "",

    selenium : {
        "start_process" : false,
        "host" : "hub-cloud.browserstack.com",
        "port" : 80
    },

    "test_workers" : {"enabled" : true, "workers" : "auto"},

    "test_settings" : {
        "default": {
            "launch_url": "https://member-portal.env-dev3.vivantehealth.org",
            "selenium_port": 80,
            "selenium_host": "hub-cloud.browserstack.com",
            "silent": true,
            "screenshots": {
                "enabled": false,
                "path": ""
            },
            "username": "kostazj@gmail.com",
            "access_key": "Qx51TPzxumeBuEqCEyKz",
            "desiredCapabilities": {
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        },
        "chrome": {
            "desiredCapabilities": {
                "platform": "windows 10",
                "browserName": "chrome",
                "version": "59"
            }
        },
        "firefox": {
            "desiredCapabilities": {
                "platform": "Windows 7",
                "browserName": "firefox",
                "version": "42"
            }
        },
        "internet_explorer_10": {
            "desiredCapabilities": {
                "platform": "Windows",
                "browserName": "internet explorer",
                "version": "10"
            }
        },
        "ie11": {
            "desiredCapabilities": {
                "browserName": "internet explorer",
                "platform": "Windows 10",
                "version": "11.0"
            }
        },
        "safari": {
            "desiredCapabilities": {
                "browserName": "safari",
                "platform": "OS X 10.11",
                "version": "9.0"
            }
        },
        "edge": {
            "desiredCapabilities": {
                "browserName": "MicrosoftEdge",
                "platform": "Windows 10",
                "version": "13.10586"
            }
        },
        "ffox": {
            desiredCapabilities: {
                'browserstack.user': 'rody6',
                'browserstack.key': '65cVW1BzSTvy2HWL4Mtc',
                'os': 'Windows',
                'os_version': '7',
                'browser': 'Firefox',
                'browser_version': '55.0',
                'resolution': '1024x768'
            },


            "android": {
                desiredCapabilities: {
                'browserstack.user': 'rody6',
                'browserstack.key': '65cVW1BzSTvy2HWL4Mtc',
                'device': 'Samsung Galaxy S8',
                'realMobile': 'true',
                'os_version': '7.0'
                }
            }
        }
    }}

// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
    var config = nightwatch_config.test_settings[i];
    config['selenium_host'] = nightwatch_config.selenium.host;
    config['selenium_port'] = nightwatch_config.selenium.port;
}

module.exports = nightwatch_config;

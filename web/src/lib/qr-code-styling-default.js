import QRCodeStyling from "qr-code-styling";

// Creates QRCode with default parameters
export function QrCodeFactory(imageUrl, url) {
  return new QRCodeStyling({
    width: 300,
    height: 300,
    data: url,
    image: imageUrl,
    dotsOptions: {
      type: "classy-rounded",
      color: "#6a1a4c",
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          {
            offset: 0,
            color: "#0f0f0f"
          },
          {
            offset: 1,
            color: "#00875f"
          }
        ]
      }
    },
    backgroundOptions: {
      color: "#ffffff"
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 5
    },
    dotsOptionsHelper: {
      colorType: {
        single: true,
        gradient: false
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#6a1a4c",
        color2: "#6a1a4c",
        rotation: "0"
      }
    },
    cornersSquareOptions: {
      type: "extra-rounded",
      color: "#121214",
      gradient: null
    },
    cornersSquareOptionsHelper: {
      colorType: {
        single: true,
        gradient: false
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#000000",
        color2: "#000000",
        rotation: "0"
      }
    },
    cornersDotOptions: {
      type: "dot",
      color: "#121214"
    },
    cornersDotOptionsHelper: {
      colorType: {
        single: true,
        gradient: false
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#000000",
        color2: "#000000",
        rotation: "0"
      }
    },
    backgroundOptionsHelper: {
      colorType: {
        single: true,
        gradient: false
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#ffffff",
        color2: "#ffffff",
        rotation: "0"
      }
    }
  })
}

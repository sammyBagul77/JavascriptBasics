let envName  = "qa"
const timeout = 8000
const subdomin = ".testingacademy.com"


switch (envName) {
    case "staging":
         console.log(`Base URL: https://${envName}-api${subdomin} API Key: stg_key_T07G-FEN3 Timeout: ${timeout}ms Description: Staging - Pre-production mirror`);
        break;
          case "dev":
         console.log(`Base URL: https://${envName}-api${subdomin} API Key: dev_key_B04G-FTR3 Timeout: ${timeout}ms Description: Dev - Development Envoirnment`)
        break;
          case "production":
         console.log(`Base URL: https://www${subdomin} API Key: prod_key_B17G-HER2 Timeout: ${timeout}ms Description: Production - Live Envoirnment`)
        break;
          case "qa":
         console.log(`Base URL: https://${envName}-api${subdomin} API Key: test_key_B6YG-FER2 Timeout: ${timeout}ms Description: Testing - Testing Phase`)
        break;

    default:
                 console.log(`Please provide proper Envoirnment`)

        break;
}
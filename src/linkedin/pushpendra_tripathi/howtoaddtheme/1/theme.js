import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    palette:{
        primary:{main:'#2b37d4'},
        secondary:{main:'#e769a6'},
        success:{main:'#09fe00'},
    },
    typography:{
        h1:{fontSize:'50px'},
        h2:{fontSize:'30px'},
    }
})
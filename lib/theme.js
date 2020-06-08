import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#FF5C36', // lighter red
			main: '#EE1602', // red
			dark: '#B20000', // dark red
		},
		secondary: {
			light: '#ADF0F7', // light blue
			main: '#02DAEE', // teal
			dark: '#00B8D2', // darker teal
		},
		error: {
			light: '#F68DB3', // lighter magenta
			main: '#EE0264', // magenta
			dark: '#C7005D', // darker magenta
		},
		warning: {
			light: '#F5B64E', // lighter orange
			main: '#EE8C02', // orange
			dark: '#e26d00', // darker orange
		},
		info: {
			light: '#E7F56A', // lighter yellow
			main: '#DAEE02', // yellow
			dark: '#BCC400', // darker yellow
		},
		success: {
			light: '#83F674', // lighter lime
			main: '#02EE16', // lime
			dark: '#00C600', // darker lime
		},
		background: {
			default: '#fff',
		},
		text: {
			primary: '#212121',
			secondary: '#757575',
		},
		divider: '#BDBDBD',
	},
	// When the configuration variables aren't powerful enough
	// overrides: {
	// 	// stylesheet name
	// 	MuiToolbar: {
	// 		regular: {
	// 			minHeight: '48px',
	// 		}
	// 	}
	// },
});

export default theme;
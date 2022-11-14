import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View, ImageBackground, Linking } from 'react-native';
import Colors from '~/styles/Colors';
import * as RootNavigation from '~/routes/rootNavigation'
import { useAuth } from '~/contexts/auth';
import LogovitalePrime from '../../assets/vitale-prime-white.svg'
import services from '~/services';

const Main = () => {
	const { logout } = useAuth();
	const [grupo, setGrupo] = useState(null);
	const [environment, setEnvironment] = useState(null);
	useEffect(() => {
		async function getEnvironment() {
			const environment = await services.asyncStorage.getEnvironment()
			setEnvironment(environment)
		}
		getEnvironment()
	}, []);

	useEffect(() => {
		async function getGrupo() {
			const group = await services.asyncStorage.getGrupo();
			setGrupo(group)
		}
		getGrupo();
	}, []);

	return (
		<View style={{
			flex: 1,
		}}>
			<ImageBackground
				source={require('../../assets/vitale.png')}
				resizeMode="cover"
				style={{
					flex: 1,
					paddingHorizontal: 20,
					justifyContent: 'center'
				}}>

				<View
					style={{
						alignItems: 'center',
						marginTop: 40
					}}
				>
					<LogovitalePrime
						height={80}
						width={250}
					/>
				</View>

				<View style={{
					alignItems: 'center',
					marginTop: "auto"
				}}>

					<Text style={{
						color: "#FFF",
						fontSize: 20,
						marginBottom: 30,
						textAlign: 'center'
					}}>
						Selecione o módulo que deseja entrar
					</Text>

					<TouchableOpacity
						onPress={() => RootNavigation.navigate("vitalePrime", { grupo: grupo, env: environment })}

						style={styles.button}>
						<Text style={{
							color: "#FFF",
							fontWeight: 'bold',
							fontSize: 18
						}}>
							MÉDICOS
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						disabled={true}
						onPress={() => {
							Alert.alert("Ambiente em desenvolvimento...")
							RootNavigation.navigate("LoginPDV")
						}}
						style={styles.button}>
						<Text style={{
							color: "#FFF",
							fontWeight: 'bold',
							fontSize: 18
						}}>
							DENTISTAS
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						disabled={true}
						onPress={() => {
							Alert.alert("Ambiente em desenvolvimento...")
							RootNavigation.navigate("LoginPDV")
						}}
						style={styles.button}>
						<Text style={{
							color: "#FFF",
							fontWeight: 'bold',
							fontSize: 18
						}}>
							HOSPITAIS
						</Text>
					</TouchableOpacity>

				</View>


				<TouchableOpacity
					onPress={() => logout()}
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						height: 50,
						width: 150,
						backgroundColor: "#FFF",
						marginTop: "auto",
						alignSelf: 'center',
						borderRadius: 8,
						marginBottom: 30
					}}>
					<Text style={{
						color: Colors.dark_text,
						fontWeight: 'bold',
					}}>Desconectar</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View >
	);
}

export default Main;

const styles = StyleSheet.create({
	button: {
		height: 70,
		width: "80%",
		backgroundColor: "rgba(255,255,255,0.3)",
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
		marginBottom: 20
	},
})
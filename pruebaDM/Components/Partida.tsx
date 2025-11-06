import { View, Text, Alert, FlatList, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useJuegoContext } from '../Providers/JuegoProvider'

export default function Partida() {

    const { cartas, cantidadPartidas, sumarPartida } = useJuegoContext();

    let cartasSeleccionada = [] as string[]

    function jugar(cartaSeleccionada: string) {
        cartasSeleccionada.push(cartaSeleccionada);

        if (cartasSeleccionada.length == 2) {
            if (cartasSeleccionada[0] === cartasSeleccionada[1]) {
                Alert.alert('gano la partida');
                sumarPartida({
                    id: cartasSeleccionada.length + 1,
                    descripcion: 'partida ganada'
                })
            } {
                Alert.alert('derdio la partida');
                sumarPartida({
                    id: cartasSeleccionada.length + 1,
                    descripcion: 'partida perdida'
                })
            }
        }
    }

    return (
        <View>
            <FlatList data={cartas}
                keyExtractor={(_: any, i: { toString: () => any; }) => i.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <Button title='jugar' onPress={() => jugar(item)}></Button>
                )}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
import React from "react";
import {Image, StyleSheet, View} from "react-native";
import Texto from "../../../components/Texto";

function Item({item: {nome, imagem}}){
    return(
        <View style={estilos.item}>
                <Image source={imagem} style={estilos.imagem}/>
                <Texto style={estilos.nome}>
                    {nome}
                </Texto>                           
        </View>
    );
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
        paddingVertical: 16,
        marginHorizontal: 16,
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
});

export default Item;
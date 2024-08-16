import { Pressable, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export function Produto({ data, onDelete, onEdit }) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                { backgroundColor: isPressed ? "#090570" : "#CECECE" },
            ]}
            onPress={() => {
                if (isPressed) {
                    setIsPressed(false);
                } else {
                    setIsPressed(true);
                    onEdit(data); 
                }
            }}
        >
            <Text style={styles.text}>
                {data.quantidade} - {data.nome}
            </Text>
            <TouchableOpacity onPress={onDelete}>
                <MaterialIcons name="delete" size={24} color="#090570" />
            </TouchableOpacity>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CECECE",
        padding: 24,
        borderRadius: 5,
        gap: 12,
        flexDirection: "row",
    },
    text: {
        flex: 1,
    },
});
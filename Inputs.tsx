import react from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

interface InputProperties {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    error?: string;
    placeholder?: string;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

export const RequiredInput:React.FC<InputProperties> =({
    label,
    value,
    onChangeText,
    error,
    placeholder,
    secureTextEntry = false,
    keyboardType = 'default',
    autoCapitalize = 'none',
    }) => {return (
        <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          !!error && styles.inputError,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}/>
        {!!error && <Text style={styles.errorText}>{error}</Text>}
    </View>
);
};
const styles = StyleSheet.create({
    inputContainer: {
        marginBottom: 18,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#334155',
        marginBottom: 6,
    },
    input: {
        height: 48,
        borderWidth: 1.5,
        borderColor: '#cbd5e1',
        borderRadius: 8,
        paddingHorizontal: 14,
        fontSize: 15,
        color: '#0f172a',
        backgroundColor: '#ffffff',
    },
    inputError: {
        borderColor: '#ef4444',
        backgroundColor: '#fef2f2',
    },
    errorText: {
        color: '#ef4444',
        fontSize: 12,
        marginTop: 4,
        fontWeight: '500',
    },
});
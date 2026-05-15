import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useDeviceViewModel } from '../viewmodels/useDeviceViewModel';

export const DeviceScreen = () => {
    // Extraemos la lógica del ViewModel
    const { battery, loading, loadBatteryInfo, handleCalendarPress } = useDeviceViewModel();

    // Cargamos la batería al montar el componente
    useEffect(() => {
        loadBatteryInfo();
    }, [loadBatteryInfo]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>System Bridge (Kotlin)</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Nivel de Batería:</Text>
                {loading ? (
                    <ActivityIndicator color="#007AFF" />
                ) : (
                    <Text style={styles.value}>{battery !== null ? `${battery}%` : '---'}</Text>
                )}

                <TouchableOpacity style={styles.refreshBtn} onPress={loadBatteryInfo}>
                    <Text style={styles.btnText}>Actualizar Batería</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={[styles.button, styles.calendarBtn]}
                onPress={handleCalendarPress}
            >
                <Text style={styles.btnText}>Abrir Calendario Nativo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f0f2f5', justifyContent: 'center', padding: 20 },
    title: { fontSize: 26, fontWeight: 'bold', color: '#1a1a1a', textAlign: 'center', marginBottom: 40 },
    card: { backgroundColor: '#fff', padding: 25, borderRadius: 15, alignItems: 'center', elevation: 4 },
    label: { fontSize: 16, color: '#666' },
    value: { fontSize: 48, fontWeight: 'bold', color: '#007AFF', marginVertical: 10 },
    refreshBtn: { marginTop: 15, padding: 10 },
    button: { padding: 18, borderRadius: 12, alignItems: 'center', marginTop: 20 },
    calendarBtn: { backgroundColor: '#34C759' },
    btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
package com.mydeviceapp.services

import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.os.BatteryManager

class BatteryService(private val context: Context) {

    fun getLevel(): Int {
        val intentFilter = IntentFilter(Intent.ACTION_BATTERY_CHANGED)
        val batteryStatus = context.registerReceiver(null, intentFilter)

        val level = batteryStatus?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
        val scale = batteryStatus?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1

        // Aplicando tu estándar: siempre usamos llaves {} para legibilidad
        if (level != -1 && scale != -1) {
            return (level / scale.toFloat() * 100).toInt()
        }

        return -1
    }
}
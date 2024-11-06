package com.example

import android.appwidget.AppWidgetManager
import android.content.ComponentName
import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class RNTPWidgetModule (private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "RNTPWidgetModule"

    @ReactMethod fun updateWidget() {
        val intent = Intent(reactContext, RNTPAppWidget::class.java)
        intent.setAction("android.appwidget.action.APPWIDGET_UPDATE")
        val widgetManager = AppWidgetManager.getInstance(reactContext)
        val ids = widgetManager.getAppWidgetIds(ComponentName(reactContext, RNTPAppWidget::class.java))
        Log.d("APM", "sending widget update broadcast to $ids")
        intent.putExtra(AppWidgetManager.EXTRA_APPWIDGET_IDS, ids)
        reactContext.sendBroadcast(intent)
    }
}

function SendNoti(type, title, message, time, position)
	SendNUIMessage({
		action = 'notification',
		type = type,
        title = title,
        message = message,
        time = time,
		position = position -- left - appears on the left side of the screen, right - appears on the right side of the screen
	})
end

RegisterNetEvent('abson-notify:SendNoti')
AddEventHandler('abson-notify:SendNoti', function(type, title, message, time, position)
	SendNoti(type, title, message, time, position)
end)

--Example usage:

--[[


RegisterCommand('testnoti', function(_, args)
    local message = table.concat(args, ' ')
    exports['abson-notify']:SendNoti("info", "Information", "bb", 15000, "right")
    exports['abson-notify']:SendNoti("system", "system", "you_need_sec_rest", 15000, "right")
    exports['abson-notify']:SendNoti("success", "success", "you_need_sec_rest", 15000, "right")
    exports['abson-notify']:SendNoti("error", "error", "you_need_sec_rest", 15000, "right")
    exports['abson-notify']:SendNoti("warning", "warning", "you_need_sec_rest", 15000, "right")
    exports['abson-notify']:SendNoti("sms", "sms", "you_need_sec_rest", 15000, "right")
end)

	exports['abson-notify']:SendNoti("system", "System", "System notification message", 4000, "right")
	exports['abson-notify']:SendNoti("info", "Information", "Information notification message", 4000, "left")
	exports['abson-notify']:SendNoti("success", "Success", "Success notification message", 4000, "right")
	exports['abson-notify']:SendNoti("error", "Error", "Error notification message", 4000, "left")
	exports['abson-notify']:SendNoti("warning", "Warning", "Warning notification message", 4000, "right")
	exports['abson-notify']:SendNoti("sms", "SMS", "SMS notification message", 4000, "left")
]]

import React from 'react';
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import React from 'react';

const Switch = () => {
  return (
    <div className="day-night-switch-wrapper">
      <style>
        {\`
        .day-night-switch {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 30px;
          width: 60px;
          height: 26px;
        }

        .day-night-toggle {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .day-night-slider {
          image-rendering: pixelated;
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          /* Base64 background (Truncated for preview) */
          background: url(data:image/png;base64,...);
          background-size: 100% 100%;
          transition: 0.3s;
        }

        .day-night-slider:before {
          box-sizing: border-box;
          position: absolute;
          content: "";
          height: 32px;
          width: 28px;
          bottom: 0px;
          /* Base64 background (Truncated for preview) */
          background: url(data:image/png;base64,...);
          background-size: 100% 100%;
        }

        .day-night-toggle:checked + .day-night-slider {
          /* Base64 background (Truncated for preview) */
          background: url(data:image/png;base64,...);
          background-size: 100% 100%;
        }

        .day-night-toggle:checked + .day-night-slider:before {
          transform: translateX(32px);
        }
        \`}
      </style>
      <label className="day-night-switch">
        <input className="day-night-toggle" type="checkbox" />
        <span className="day-night-slider" />
      </label>
    </div>
  );
}

export default Switch;
`;

export function DayNightSwitch() {
  return (
    <ComponentShowcase title="Day Night Switch" code={code} className="min-h-[150px] flex items-center justify-center">
      <div className="day-night-switch-wrapper scale-[2]">
        <style>
          {`
            .day-night-switch {
              position: relative;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              gap: 30px;
              width: 60px;
              height: 26px;
            }

            .day-night-toggle {
              opacity: 0;
              width: 0;
              height: 0;
            }

            .day-night-slider {
              image-rendering: pixelated;
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              /* Background 1 (Day) - Full Base64 */
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAEECAYAAAD0wkrNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsEAAA7BAbiRa+0AAAGHaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj48dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCjw/eHBhY2tldCBlbmQ9J3cnPz4slJgLAAAFd0lEQVR4Xu3YMWpbQRhG0ZGdwqAVJqQzRsYIL8aoSUgppKUJvIaYl346+91Csc+Bab52msu/GWMsAwCAzM08AACwjsACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACA2GaMsczjGsfTeZ4AAK7azx/f52kVFywAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgJjAAgCICSwAgNhmjLHM4xrH03mersrl8jpPAHzA4fAyT7zDfv88T5/adns3T1fl6XE3T6u4YAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxDYjjGUe1ziezvN0VS6X13kC+BIOh5d5WmW/f54n3uGr/cd2ezdPq9zefpunVXYP9/O0igsWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEAxAQWAEBMYAEA/523t7/pqwksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAIDYZoyxzOMax9N5nq7K5fI6TwB8wOHwMk+8w37/PE+f2nZ7N09X5elxN0+ruGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQ2Y4xlHtf4/evPPAEApJabzTytsnu4n6dVXLAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGKbMcYyjwAAfJwLFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBATGABAMQEFgBA7B+FCmkzoT9HAAAAAABJRU5ErkJggg==);
              background-size: 100% 100%;
              transition: 0.3s;
            }

            .day-night-slider:before {
              box-sizing: border-box;
              position: absolute;
              content: "";
              height: 32px;
              width: 28px;
              bottom: 0px;
              /* Slider Handle (Both) - Full Base64 */
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAFACAYAAABnU2MWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsEAAA7BAbiRa+0AAAGHaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj48dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCjw/eHBhY2tldCBlbmQ9J3cnPz4slJgLAAAEZElEQVR4Xu3cMWojURBF0WpHQpYXOxivYjBerGWhrCf/aesOFpwTvgVcKqptZvYBCLysA8CjCAyQERggIzBARmCAjMAAGYEBMgIDZAQGyAgMkBEYICMwQEZggIzAABmBATICA2QEBsgIDJARGCCzPfon7/V2XyfgSVzOp3U6xAUDZAQGyAgMkBEYICMwQEZggIzAABmBATICA2QEBsgIDJARGCAjMEBGYICMwAAZgQEyAgNkBAbICAyQERggIzBARmCAjMAAGYEBMgIDZAQGyAgMkBEYICMwQEZggIzAABmBATICA2QEBsgIDJARGCAjMEBGYICMwAAZgQEyAgNkBAbICAyQERggIzBARmCAjMAAGYEBMgIDZAQGyAgMkBEYICMwQEZggIzAABmBATICA2QEBsgIDJARGCAjMEBGYICMwAAZgQEyAgNkBAbICAyQERggIzBARmCAjMAAGYEBMgIDZAQGyAgMkBEYICMwQEZggIzAABmBATICA2QEBsgIDJARGCAjMEBGYICMwAAZgQEyAgNkBAbICAyQERggIzBARmCAjMAAGYEBMgIDZAQGyAgMkBEYICMwQEZggIzAABmBATICA2QEBsgIDJARGCAjMEBGYICMwAAZgQEyAgNkBAbICAyQERggIzBARmCAjMAAGYEBMgIDZAQGyAgMkBEYICMwQEZggIzAABmBATICA2S2mdnX8Yjr7b5OwJO4nE/rdIgLBsgIDJARGCAjMEBGYICMwAAZgQEyAgNkBAbICAyQERggIzBARmCAjMAAGYEBMgIDZAQGyAgMkBEYICMwQEZggIzAABmBATICA2QEBsgIDJARGCAjMEBGYICMwAAZgQEyAgNkBAbICAyQERggIzBARmCAjMAAGYEBMtvM7Ot4xN/Pr3UCnsTH+591OsQFA2QEBsgIDJARGCAjMEBGYICMwAAZgQEyAgNkBAbICAyQERggIzBARmCAjMAAGYEBMgIDZAQGyAgMkBEYICMwQEZggIzAABmBATICA2QEBsgIDJARGCAjMEBGYICMwAAZgQEyAgNkBAbICAyQERggIzBARmCAjMAAmW1m9nUEeAQXDJARGCAjMEBGYICMwAAZgQEyAgNkBAbICAyQERggIzBARmCAjMAAGYEBMgIDZAQGyAgMkBEYICMwQOYfxHAXdb5V9+0AAAAASUVORK5CYII=);
              background-size: 28px 32px;
              transition: 0.3s;
            }

            .day-night-toggle:checked + .day-night-slider {
              /* Background 2 (Night) - Full Base64 */
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAEECAYAAAD0wkrNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABEYSURBVHhe7daxDTBVDoXRvxqqYHMagJBwO9kqVkh0CjHXof2YG5wnncSRNQ7m+/Hjx4+/AAA4NQYAAOyMAQAAO2MAAMDOGAAAsDMGAADsjAEAADtjAADAzhgAALAzBgAA7IwBAAA7YwAAwM4YAACwMwYAAOyMAQAAO2MAAMDOGAAAsDMGAADsjAEAADtjAADAzhis/PeP36r9/ucvAAD/kD1zYAxWMmja5AcFAMieOTAGKxk0bfKDAgBkzxwYg5UMmjb5QQEAsmcOjMFKBk2b/KAAANkzB8ZgJYOmTX5QAIDsmQNjsJJB0yY/KABA9syBMVjJoGmTHxQAIHvmwBisZNC0yQ8KAJA9c2AMVjJo2uQHBQDInjkwBisZNG3ygwIAZM8cGIOVDJo2+UEBALJnDozBSgZNm/ygAADInjkwhp3oKAAAAABJRU5ErkJggg==);
              background-size: 100% 100%;
            }

            .day-night-toggle:checked + .day-night-slider:before {
              transform: translateX(32px);
            }
          `}
        </style>
        <label className="day-night-switch">
          <input className="day-night-toggle" type="checkbox" />
          <span className="day-night-slider" />
        </label>
      </div>
    </ComponentShowcase>
  );
}

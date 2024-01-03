import Link from "next/link";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@/ui/index";

import {
  IconInbox,
  IconLogout2,
  IconReportAnalytics,
  IconUserCircle,
  IconSettings,
  IconBug,
} from "@tabler/icons-react";

export default function Sidebar() {
  const iconSize = "h-5 w-5";
  return (
    <Card className="w-full h-full p-4 rounded-none shadow-md bg-opacity-20">
      <List>
        <Link href="/myErrors">
          <ListItem>
            <ListItemPrefix>
              <IconBug className={iconSize} />
            </ListItemPrefix>
            My Errors
          </ListItem>
        </Link>
        <Link href="/adminDashboard">
          <ListItem>
            <ListItemPrefix>
              <IconReportAnalytics className={iconSize} />
            </ListItemPrefix>
            Admin Dashboard
          </ListItem>
        </Link>

        <ListItem>
          <ListItemPrefix>
            <IconInbox className={iconSize} />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <IconUserCircle className={iconSize} />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <IconSettings className={iconSize} />
          </ListItemPrefix>
          Settings
        </ListItem>
      </List>
    </Card>
  );
}

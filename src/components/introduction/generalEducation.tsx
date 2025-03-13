import { List } from "@mantine/core";

export default function GeneralEducation() {
  return (
    <div className="py-7">
      <List withPadding listStyleType="disc">
        <List.Item>
          <strong>Software Development Lifecycle</strong> – Mastered the
          software development process from requirement analysis, design,
          programming, testing, and deployment.
        </List.Item>
        <List.Item>
          <strong>Object-Oriented Programming (OOP)</strong> – Applied OOP
          principles to real-world projects.
        </List.Item>
        <List.Item>
          <strong>Database Management Systems</strong> – Worked with MySQL,
          MongoDB, optimized queries, and designed database models.
        </List.Item>
        <List.Item>
          <strong>Web Development</strong> – Developed web applications using
          React.js, Node.js, Express.js, Firebase.
        </List.Item>
        <List.Item>
          <strong>Mobile Development</strong> – Built mobile applications with
          React Native.
        </List.Item>
        <List.Item>
          <strong>Software Engineering & Agile Development</strong> – Practiced
          software development models like Scrum, Kanban.
        </List.Item>
        <List.Item>
          <strong>Business Analysis</strong> – Created SRS, BRD, Use Case
          Diagram documents using tools like Jira, Figma, Lucidchart.
        </List.Item>
      </List>
    </div>
  );
}
